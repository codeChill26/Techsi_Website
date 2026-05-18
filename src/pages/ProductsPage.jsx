import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import { Activity, Cable, Cpu, Layers, Wifi } from 'lucide-react'

import '../styles/landing.css'
import '../styles/products.css'

const productSections = [
  {
    Icon: Cpu,
    title: 'Electronic Devices & Components',
    desc:
      'From prototyping to mass production, we supply a vast array of active and passive components essential for consumer electronics, automotive tech, industrial automation, and IoT applications.',
    items: [
      {
        Icon: Cpu,
        title: 'Active Components',
        bullets: [
          'Semiconductors',
          'Microcontrollers (MCUs)',
          'Integrated Circuits (ICs)',
          'Diodes',
          'Transistors',
        ],
      },
      {
        Icon: Layers,
        title: 'Passive Components',
        bullets: ['Resistors', 'Capacitors', 'Inductors', 'Transformers'],
      },
      {
        Icon: Activity,
        title: 'Sensors & Modules',
        bullets: [
          'Power management modules',
          'Optoelectronics',
          'Smart sensors',
        ],
      },
    ],
  },
  {
    Icon: Cable,
    title: 'Optical transmission solution',
    desc: [
      'In an era of hyper-connectivity, we provide the infrastructure hardware and components necessary to build, expand, and maintain robust communication networks.',
      'We are a trusted partner for high-capacity optical transport networks. We specialize in advanced DWDM (Dense Wavelength Division Multiplexing) solutions that enable telecom operators, enterprises, and data centers to expand bandwidth, improve network reliability, and optimize fiber infrastructure efficiency.',
      'With a focus on innovation, scalability, and end-to-end service support, we deliver reliable optical networking solutions including transmission systems, network design, deployment, monitoring, and maintenance services. Our mission is to help customers build faster, smarter, and future-ready communication networks.',
    ],
    items: [
      {
        Icon: Cable,
        title: 'Networking Hardware',
        bullets: ['Switches', 'Routers', 'Gateways', 'Access points'],
      },
      {
        Icon: Wifi,
        title: 'Wireless & RF Components',
        bullets: [
          'RF connectors',
          'Antennas',
          'Transceivers',
          'Cellular modules (5G/4G/LTE)',
        ],
      },
      {
        Icon: Layers,
        title: 'Fiber Optics',
        bullets: [
          'Backbone and regional DWDM',
          'Optical transceivers',
          'Fiber optic cables and optical accessories',
        ],
      },
    ],
  },
  {
    Icon: Wifi,
    title: 'Broadband solutions',
    desc: [
      'We are delivering next-generation fiber broadband solutions for telecom operators, enterprises, ISPs, and smart city infrastructures. We provide end-to-end optical access technologies including GPON, XGS-PON, FTTH, and carrier-grade transmission systems to enable ultra-fast, stable, and scalable connectivity.',
      'Our solutions are designed to support growing bandwidth demands, enhance network performance, and accelerate digital transformation. From network planning and deployment to operation and maintenance, we help customers build reliable, future-ready broadband infrastructures with high efficiency and long-term value.',
    ],
    items: [
      {
        Icon: Layers,
        title: 'Optical Access Technologies',
        bullets: ['GPON', 'XGS-PON', 'FTTH'],
      },
      {
        Icon: Cable,
        title: 'Carrier-Grade Transmission',
        bullets: ['Carrier-grade transmission systems'],
      },
      {
        Icon: Activity,
        title: 'Lifecycle Services',
        bullets: [
          'Network planning and design',
          'Deployment and integration',
          'Operation and maintenance',
        ],
      },
    ],
  },
]

export default function ProductsPage() {
  const navigate = useNavigate()

  return (
    <div className="lp">
      <Header />
      <main>
        <section className="pr-hero" id="top">
          <div className="container">
            <div className="pr-hero__kicker">CATALOGUE</div>
            <h1 className="pr-hero__title">
              Electronic components, sourced responsibly
            </h1>
            <p className="pr-hero__desc">
              We work directly with authorised distributors and franchised
              partners to bring you genuine parts — fully traceable and backed
              by full documentation.
            </p>
          </div>
        </section>

        <section className="pr-categories" aria-label="Product categories">
          <div className="container">
            {productSections.map(({ Icon, title, desc, items }) => (
              <div className="pr-block" key={title}>
                <div className="pr-block__head">
                  <div className="pr-block__iconWrap" aria-hidden="true">
                    <Icon className="pr-block__icon" />
                  </div>
                  <h2 className="pr-block__title">{title}</h2>
                </div>

                <div className="pr-block__descGroup">
                  {(Array.isArray(desc) ? desc : [desc]).map((p) => (
                    <p className="pr-block__desc" key={p}>
                      {p}
                    </p>
                  ))}
                </div>

                <div className="pr-categories__grid">
                  {items.map((it) => (
                    <article className="pr-card" key={it.title}>
                      <div className="pr-card__iconWrap" aria-hidden="true">
                        <it.Icon className="pr-card__icon" />
                      </div>
                      <h3 className="pr-card__title">{it.title}</h3>
                      <ul className="pr-card__list">
                        {it.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pr-bom" aria-label="BOM quote call-to-action">
          <div className="container">
            <div className="pr-bom__card">
              <h2 className="pr-bom__title">Looking for something specific?</h2>
              <p className="pr-bom__desc">
                Send us your BOM (Bill of Materials) or part number list.
                We&apos;ll return a competitive quote with stock and lead-time
                information.
              </p>
              <button
                className="lp-btn pr-bom__btn"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Submit your BOM
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
