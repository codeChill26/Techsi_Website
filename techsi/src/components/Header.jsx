import logo from '../assets/Logo.png'
import { useSyncExternalStore } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const pathname = location.pathname

  const hash = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('hashchange', onStoreChange)
      return () => window.removeEventListener('hashchange', onStoreChange)
    },
    () => window.location.hash || '',
    () => '',
  )

  const normalizedHash = (hash || '').toLowerCase()

  const isLanding = pathname === '/'
  const activeSection = isLanding ? normalizedHash : ''
  const isProductsActive = activeSection === '#products'
  const isServicesActive = activeSection === '#services'
  const isHomeActive = isLanding && !(isProductsActive || isServicesActive)

  return (
    <header className="lp-header">
      <div className="container lp-header__inner">
        <Link className="lp-header__logo" to="/" aria-label="TECHSI">
          <img src={logo} alt="TECHSI" />
          <span>TECHSI</span>
        </Link>

        <nav className="lp-nav" aria-label="Primary">
          <Link
            to="/"
            data-active={isHomeActive ? 'true' : undefined}
            aria-current={isHomeActive ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/about"
            data-active={pathname === '/about' ? 'true' : undefined}
            aria-current={pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
          <a
            href="/#products"
            data-active={isProductsActive ? 'true' : undefined}
            aria-current={isProductsActive ? 'page' : undefined}
          >
            Products
          </a>
          <a
            href="/#services"
            data-active={isServicesActive ? 'true' : undefined}
            aria-current={isServicesActive ? 'page' : undefined}
          >
            Services
          </a>
          <Link
            to="/contact"
            data-active={pathname === '/contact' ? 'true' : undefined}
            aria-current={pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </nav>

        <div className="lp-header__spacer" aria-hidden="true" />
      </div>
    </header>
  )
}
