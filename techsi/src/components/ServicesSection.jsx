import iWholesale from '../assets/sliced/Icon_3/Icon_3_r1_c3.png'
import iMarketplace from '../assets/sliced/Icon_3/Icon_3_r2_c2.png'
import iLogistics from '../assets/sliced/Icon_3/Icon_3_r1_c2.png'
import iQuality from '../assets/sliced/Icon_3/Icon_3_r2_c1.png'
import iFast from '../assets/sliced/Icon_3/Icon_3_r2_c3.png'
import iEngineering from '../assets/sliced/Icon_3/Icon_3_r1_c1.png'

const items = [
  {
    icon: iWholesale,
    title: 'Component Wholesale',
    desc: 'ICs, semiconductors, passives, connectors, modules — sourced from authorised global brands.',
  },
  {
    icon: iMarketplace,
    title: 'Online Marketplaces',
    desc: 'Digital platforms that connect OEMs and buyers with vetted service providers across the region.',
  },
  {
    icon: iLogistics,
    title: 'Logistics & Fulfilment',
    desc: 'End-to-end shipping from Singapore, with full traceability and transit handling.',
  },
  {
    icon: iQuality,
    title: 'Quality Assurance',
    desc: 'Anti-counterfeit screening, batch tracking and full documentation on every order.',
  },
  {
    icon: iFast,
    title: 'Fast Quotations',
    desc: 'Most quotes returned within 4 working hours, with live stock and lead-time visibility.',
  },
  {
    icon: iEngineering,
    title: 'Engineering Support',
    desc: 'Dedicated account managers help BOM optimisation and obsolescence management.',
  },
]

export default function ServicesSection() {
  return (
    <section className="lp-services" id="services">
      <div className="container">
        <div className="lp-services__grid">
          {items.map((it) => (
            <div className="lp-card" key={it.title}>
              <img className="lp-card__icon" src={it.icon} alt="" />
              <div className="lp-card__title">{it.title}</div>
              <p className="lp-card__desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
