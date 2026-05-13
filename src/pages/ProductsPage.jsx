import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import {
  Activity,
  Cable,
  Cpu,
  Database,
  Layers,
  Wifi,
  Wrench,
  Zap,
} from 'lucide-react'

import '../styles/landing.css'
import '../styles/products.css'

const categories = [
  {
    Icon: Cpu,
    title: 'Semiconductors & ICs',
    desc: 'Microcontrollers, MPUs, SoCs, FPGAs, analog and mixed-signal ICs.',
  },
  {
    Icon: Layers,
    title: 'Passive Components',
    desc: 'Resistors, capacitors, inductors, crystals and oscillators.',
  },
  {
    Icon: Zap,
    title: 'Power Management',
    desc: 'DC-DC converters, LDOs, MOSFETs, gate drivers and protection ICs.',
  },
  {
    Icon: Cable,
    title: 'Connectors & Cables',
    desc: 'Board-to-board, wire-to-board, RF, USB-C, FFC/FPC connectors.',
  },
  {
    Icon: Wifi,
    title: 'Wireless & RF Modules',
    desc: 'Wi‑Fi, Bluetooth, LoRa, NB‑IoT, GNSS modules and antennas.',
  },
  {
    Icon: Database,
    title: 'Memory & Storage',
    desc: 'DRAM, NAND/NOR flash, eMMC, EEPROM and SD storage.',
  },
  {
    Icon: Activity,
    title: 'Sensors & Discretes',
    desc: 'MEMS sensors, diodes, transistors, optocouplers and relays.',
  },
  {
    Icon: Wrench,
    title: 'Tools & Accessories',
    desc: 'Development kits, programmers, enclosures and prototyping supplies.',
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
            <div className="pr-categories__grid">
              {categories.map(({ Icon, title, desc }) => (
                <article className="pr-card" key={title}>
                  <div className="pr-card__iconWrap" aria-hidden="true">
                    <Icon className="pr-card__icon" />
                  </div>
                  <h2 className="pr-card__title">{title}</h2>
                  <p className="pr-card__desc">{desc}</p>
                </article>
              ))}
            </div>
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
