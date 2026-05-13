import { useEffect, useMemo, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import '../styles/landing.css'
import '../styles/contact.css'

import iCompany from '../assets/sliced/Icon_3/Icon_3_r1_c1.png'
import iAddress from '../assets/sliced/Icon_3/Icon_3_r2_c1.png'
import iPhone from '../assets/sliced/Icon_3/Icon_3_r2_c3.png'
import iEmail from '../assets/sliced/Icon_3/Icon_3_r2_c2.png'
import iDirector from '../assets/sliced/Icon_3/Icon_3_r1_c3.png'

export default function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const [cooldownUntil, setCooldownUntil] = useState(0)

  const [trap, setTrap] = useState('')
  const firstInputAtRef = useRef(0)

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const canSubmit = status !== 'submitting'

  useEffect(() => {
    if (!cooldownUntil) return

    const intervalId = setInterval(() => {
      const remainingMs = cooldownUntil - Date.now()
      if (remainingMs <= 0) {
        setCooldownUntil(0)
        setErrorMessage((prev) => (prev.startsWith('Please wait ') ? '' : prev))
        return
      }

      const seconds = Math.ceil(remainingMs / 1000)
      setErrorMessage(`Please wait ${seconds}s before sending another message.`)
    }, 250)

    return () => clearInterval(intervalId)
  }, [cooldownUntil])

  const mapEmbedSrc = useMemo(() => {
    const q = encodeURIComponent('42, West Coast Place, Singapore 127594')
    return `https://www.google.com/maps?q=${q}&output=embed`
  }, [])

  function onChange(e) {
    const { name, value } = e.target
    if (!firstInputAtRef.current) firstInputAtRef.current = Date.now()
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (status === 'submitting') return

    // Basic anti-spam (frontend-only): daily quota + rate-limit + honeypot trap.
    // Note: client-side checks can be bypassed, but they cut down casual spam.
    const dailyLimit = 3
    const cooldownMs = 60_000
    const storageKey = 'techsi_contact_last_sent_at'
    const dailyQuotaKey = 'techsi_contact_daily_quota'
    const now = Date.now()
    const lastSentAt = Number(localStorage.getItem(storageKey) || '0')
    const remainingMs = lastSentAt ? Math.max(0, cooldownMs - (now - lastSentAt)) : 0

    const localToday = (() => {
      const d = new Date(now)
      const yyyy = d.getFullYear()
      const mm = String(d.getMonth() + 1).padStart(2, '0')
      const dd = String(d.getDate()).padStart(2, '0')
      return `${yyyy}-${mm}-${dd}`
    })()

    const quota = (() => {
      try {
        const raw = localStorage.getItem(dailyQuotaKey)
        const parsed = raw ? JSON.parse(raw) : null
        if (!parsed || typeof parsed !== 'object') return { date: localToday, count: 0 }
        if (parsed.date !== localToday) return { date: localToday, count: 0 }
        const count = Number(parsed.count)
        return { date: localToday, count: Number.isFinite(count) ? count : 0 }
      } catch {
        return { date: localToday, count: 0 }
      }
    })()

    if (quota.count >= dailyLimit) {
      setErrorMessage('Daily limit reached (3 messages/day). Please try again tomorrow.')
      return
    }

    if (remainingMs > 0) {
      setCooldownUntil(lastSentAt + cooldownMs)
      const seconds = Math.ceil(remainingMs / 1000)
      setErrorMessage(`Please wait ${seconds}s before sending another message.`)
      return
    }

    // Honeypot: real users won't fill this field. If it's filled, silently "succeed".
    if (trap.trim()) {
      setSuccessMessage('Message sent.')
      setForm({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setTrap('')
      firstInputAtRef.current = 0
      localStorage.setItem(storageKey, String(now))
      localStorage.setItem(
        dailyQuotaKey,
        JSON.stringify({ date: localToday, count: quota.count + 1 }),
      )
      return
    }

    // Optional: reject extremely fast submissions (likely bots).
    if (firstInputAtRef.current && now - firstInputAtRef.current < 800) {
      setErrorMessage('Please take a moment before submitting.')
      return
    }

    const payload = {
      fullName: form.fullName.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    }

    if (!payload.fullName || !payload.email || !payload.subject || !payload.message) {
      setErrorMessage('Please fill in all required fields.')
      return
    }

    setStatus('submitting')
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.',
        )
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: toEmail,
          from_name: payload.fullName,
          company: payload.company,
          reply_to: payload.email,
          from_email: payload.email,
          phone: payload.phone,
          subject: payload.subject,
          message: payload.message,
        },
        { publicKey },
      )

      localStorage.setItem(storageKey, String(now))
      localStorage.setItem(
        dailyQuotaKey,
        JSON.stringify({ date: localToday, count: quota.count + 1 }),
      )
      setSuccessMessage('Message sent.')
      setForm({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setTrap('')
      firstInputAtRef.current = 0
    } catch (err) {
      setErrorMessage(err?.message || 'Failed to send message.')
    } finally {
      setStatus('idle')
    }
  }

  return (
    <div className="lp">
      <Header />

      <main>
        <section className="ct-hero">
          <div className="container">
            <div className="ct-hero__kicker">CONTACT</div>
            <h1 className="ct-hero__title">Let&apos;s talk</h1>
            <p className="ct-hero__desc">
              Reach our Singapore team for quotations, partnership enquiries or
              general questions.
            </p>
          </div>
        </section>

        <section className="ct-body">
          <div className="container ct-body__grid">
            <div className="ct-info">
              <div className="ct-infoCard">
                <div className="ct-infoCard__icon" aria-hidden="true">
                  <img src={iCompany} alt="" />
                </div>
                <div>
                  <div className="ct-infoCard__label">COMPANY</div>
                  <div className="ct-infoCard__value">TECHSI PTE LTD</div>
                </div>
              </div>

              <div className="ct-infoCard">
                <div className="ct-infoCard__icon" aria-hidden="true">
                  <img src={iAddress} alt="" />
                </div>
                <div>
                  <div className="ct-infoCard__label">ADDRESS</div>
                  <div className="ct-infoCard__value">
                    42, West Coast Place, Singapore 127594
                  </div>
                </div>
              </div>

              <div className="ct-infoCard">
                <div className="ct-infoCard__icon" aria-hidden="true">
                  <img src={iPhone} alt="" />
                </div>
                <div>
                  <div className="ct-infoCard__label">PHONE</div>
                  <div className="ct-infoCard__value">+65 6952 1642</div>
                </div>
              </div>

              <div className="ct-infoCard">
                <div className="ct-infoCard__icon" aria-hidden="true">
                  <img src={iEmail} alt="" />
                </div>
                <div>
                  <div className="ct-infoCard__label">EMAIL</div>
                  <div className="ct-infoCard__value">contact@techsi.sg</div>
                </div>
              </div>

              <div className="ct-infoCard">
                <div className="ct-infoCard__icon" aria-hidden="true">
                  <img src={iDirector} alt="" />
                </div>
                <div>
                  <div className="ct-infoCard__label">DIRECTOR</div>
                  <div className="ct-infoCard__value">Mr. Francis Pang</div>
                </div>
              </div>

              <div className="ct-map">
                <div className="ct-map__frame">
                  <iframe
                    title="TECHSI location"
                    src={mapEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  className="ct-map__link"
                  href="https://maps.app.goo.gl/Nz85P57EbAgLFHXj9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            <div className="ct-formCard">
              <h2 className="ct-formCard__title">Send us a message</h2>

              <form className="ct-form" onSubmit={onSubmit}>
                <label
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
                >
                  Do not fill
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={trap}
                    onChange={(e) => setTrap(e.target.value)}
                    name="website"
                    type="text"
                  />
                </label>

                <div className="ct-form__row2">
                  <label className="ct-field">
                    <span className="ct-field__label">Full name*</span>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={onChange}
                      type="text"
                      autoComplete="name"
                    />
                  </label>

                  <label className="ct-field">
                    <span className="ct-field__label">Company</span>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      type="text"
                      autoComplete="organization"
                    />
                  </label>
                </div>

                <div className="ct-form__row2">
                  <label className="ct-field">
                    <span className="ct-field__label">Email*</span>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      type="email"
                      autoComplete="email"
                    />
                  </label>

                  <label className="ct-field">
                    <span className="ct-field__label">Phone</span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      type="tel"
                      autoComplete="tel"
                    />
                  </label>
                </div>

                <label className="ct-field">
                  <span className="ct-field__label">Subject*</span>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    type="text"
                  />
                </label>

                <label className="ct-field">
                  <span className="ct-field__label">Message*</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={6}
                  />
                </label>

                <p className="ct-form__consent">
                  By submitting this form you consent to TECHSI PTE LTD
                  processing your personal data in accordance with Singapore&apos;s
                  PDPA and our Privacy Policy.
                </p>

                {errorMessage ? (
                  <div className="ct-form__alert ct-form__alert--error">
                    {errorMessage}
                  </div>
                ) : null}

                {successMessage ? (
                  <div className="ct-form__alert ct-form__alert--success">
                    {successMessage}
                  </div>
                ) : null}

                <button className="ct-form__submit" type="submit" disabled={!canSubmit}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
