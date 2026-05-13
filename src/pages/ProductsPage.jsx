import Header from '../components/Header.jsx'
import InventorySection from '../components/InventorySection.jsx'
import CtaSection from '../components/CtaSection.jsx'
import Footer from '../components/Footer.jsx'

import '../styles/landing.css'

export default function ProductsPage() {
  return (
    <div className="lp">
      <Header />
      <main>
        <InventorySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
