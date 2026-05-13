import Header from '../components/Header.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import CtaSection from '../components/CtaSection.jsx'
import Footer from '../components/Footer.jsx'

import '../styles/landing.css'

export default function ServicesPage() {
  return (
    <div className="lp">
      <Header />
      <main>
        <ServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
