import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import {
  Award,
  GitMerge,
  Headset,
  Handshake,
  Network,
  Plug,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Users,
  Wrench,
} from 'lucide-react'

import '../styles/landing.css'
import '../styles/services.css'

const services = [
  {
    Icon: Network,
    title: 'Deep Telecom Expertise',
    desc: 'Our team brings extensive experience in telecom networks, optical transmission, broadband access, IP infrastructure, and system integration. We understand the technical and operational challenges faced by operators, enterprises, and service providers.',
  },
  {
    Icon: GitMerge,
    title: 'End-to-End Solution Integration',
    desc: 'We provide complete lifecycle services — from consultation, design, and implementation to testing, optimization, and long-term technical support. Customers benefit from a single trusted partner for seamless project delivery.',
  },
  {
    Icon: Plug,
    title: 'Multi-Vendor Integration Capability',
    desc: 'We work with leading telecom technologies and multi-vendor environments, ensuring compatibility, interoperability, and optimized network performance across different platforms and equipment manufacturers.',
  },
  {
    Icon: Headset,
    title: 'Strong Technical Support & Fast Response',
    desc: 'Our dedicated technical experts deliver responsive support, proactive troubleshooting, and reliable maintenance services to minimize downtime and ensure business continuity.',
  },
  {
    Icon: SlidersHorizontal,
    title: 'Customized & Scalable Solutions',
    desc: 'Every network has unique requirements. We tailor solutions based on customer needs while ensuring scalability for future expansion and evolving technology demands.',
  },
  {
    Icon: ShieldCheck,
    title: 'Commitment to Quality & Reliability',
    desc: 'We focus on delivering stable, secure, and high-performance telecom solutions with strict project management and quality assurance standards.',
  },
  {
    Icon: Handshake,
    title: 'Long-Term Partnership Approach',
    desc: 'We believe in building sustainable partnerships by supporting customers beyond project completion — helping them optimize operations, improve efficiency, and prepare for future growth.',
  },
  {
    Icon: Award,
    title: 'Uncompromising Quality',
    desc: 'We partner exclusively with world-renowned, certified manufacturers to guarantee that every component we deliver meets international standards (CE, RoHS, ISO).',
  },
  {
    Icon: Truck,
    title: 'Supply Chain Resilience',
    desc: 'With a robust global sourcing network and optimized logistics, we ensure stable lead times and minimize the risk of supply chain disruptions for your projects.',
  },
  {
    Icon: Wrench,
    title: 'Technical Expertise',
    desc: 'Our team of dedicated application engineers is always ready to assist you with component selection, cross-referencing, and technical troubleshooting.',
  },
  {
    Icon: Users,
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
