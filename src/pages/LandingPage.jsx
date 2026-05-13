import Header from '../components/Header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import WhatWeDoSection from '../components/WhatWeDoSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import InventorySection from '../components/InventorySection.jsx'
import CtaSection from '../components/CtaSection.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/landing.css'

export default function LandingPage() {
  return (
    <div className="lp">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ServicesSection />
        <InventorySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
