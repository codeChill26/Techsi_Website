import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import {
  BriefcaseBusiness,
  Headset,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react'

import '../styles/landing.css'
import '../styles/services.css'

const services = [
  // {
  //   Icon: Globe,
  //   title: 'Online Service Marketplaces',
  //   desc: 'Curated digital platforms connecting buyers with verified service providers across the region.',
  // },
  {
    Icon: ShoppingBag,
    title: 'Managed Procurement',
    desc: 'Outsourced sourcing, quoting, ordering and shipment tracking for your full BOM.',
  },
  {
    Icon: BriefcaseBusiness,
    title: 'BOM Optimisation',
    desc: 'Component consolidation, alternate part recommendations and obsolescence management.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality & Compliance',
    desc: 'Anti-counterfeit screening, documentation control, and serialised batch traceability.',
  },
  {
    Icon: Truck,
    title: 'Supply Programs',
    desc: 'Consignment, kanban and bonded stock programs tailored to your production cadence.',
  },
  {
    Icon: Headset,
    title: 'Engineering Support',
    desc: 'Dedicated account managers and engineering desk available throughout business hours.',
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
            <div className="sv-hero__kicker">SERVICES</div>
            <h1 className="sv-hero__title">
              Marketplaces and procurement, made simple
            </h1>
            {/* <p className="sv-hero__desc">
              Beyond components, TECHSI operates online marketplaces that connect
              buyers with vetted service providers — and offers managed
              procurement to lighten the load on your engineering team.
            </p> */}
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
