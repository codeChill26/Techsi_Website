import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import {
  BriefcaseBusiness,
  Headset,
  ShieldCheck,
  Truck,
} from 'lucide-react'

import '../styles/landing.css'
import '../styles/services.css'

const services = [
  {
    Icon: ShieldCheck,
    title: 'Uncompromising Quality',
    desc: 'We partner exclusively with world-renowned, certified manufacturers to guarantee that every component we deliver meets international standards (CE, RoHS, ISO).',
  },
  {
    Icon: Truck,
    title: 'Supply Chain Resilience',
    desc: 'With a robust global sourcing network and optimized logistics, we ensure stable lead times and minimize the risk of supply chain disruptions for your projects.',
  },
  {
    Icon: Headset,
    title: 'Technical Expertise',
    desc: 'Our team of dedicated application engineers is always ready to assist you with component selection, cross-referencing, and technical troubleshooting.',
  },
  {
    Icon: BriefcaseBusiness,
    title: 'Flexible & Customer-Centric',
    desc: 'Whether you are a startup needing low-volume samples or an EMS provider requiring high-volume wholesale distribution, we tailor our services to your scale.',
  },
]

export default function ServicesPage() {
  const navigate = useNavigate()

  return (
    <div className="lp">
      <Header />
      <main>
        <section className="sv-hero" id="top">
          <div className="container">
            <div className="sv-hero__kicker">Why Choose Techsi?</div>
            <h1 className="sv-hero__title">
              Marketplaces and procurement, made simple
            </h1>
            <p className="sv-hero__desc">
              At Techsi, we are more than just a distributor; 
              we are the vital link connecting global technology 
              innovators with industries driving the future. 
              With years of expertise in the supply chain, 
              we specialize in providing high-quality electronic devices, telecommunication systems, and advanced transmission equipment to meet the evolving demands of modern enterprises.
            </p>
          </div>
        </section>

        <section className="sv-cards" aria-label="Services overview">
          <div className="container">
            <div className="sv-cards__grid">
              {services.map(({ Icon, title, desc }) => (
                <article className="sv-card" key={title}>
                  <div className="sv-card__iconWrap" aria-hidden="true">
                    <Icon className="sv-card__icon" />
                  </div>
                  <h2 className="sv-card__title">{title}</h2>
                  <p className="sv-card__desc">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sv-cta" aria-label="Talk to our team">
          <div className="container">
            <div className="sv-cta__panel">
              <h2 className="sv-cta__title">Tell us what you need</h2>
              <p className="sv-cta__desc">
                Whether you&apos;re launching a new product or scaling production,
                our services scale with you.
              </p>
              <button
                className="lp-btn sv-cta__btn"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Talk to our team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
