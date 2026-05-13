import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="lp-footer">
      <div className="container">
        <div className="lp-footer__grid">
          <div>
            <div className="lp-footer__brand">
              <img src={logo} alt="TECHSI" />
              <div>
                <div className="lp-footer__company">TECHSI PTE LTD</div>
                <div className="lp-footer__text">
                  <em>
                    A Singapore-based wholesaler of electronic components and
                    operator of online service marketplaces, connecting global
                    manufacturers with engineering teams across Asia-Pacific.
                  </em>
                </div>
                <div className="lp-footer__text lp-footer__contact">
                  42, West Coast Place, Singapore 127594
                  <br />
                  +65 69521642
                  <br />
                  Francis@techsipl.com
                </div>
              </div>
            </div>
          </div>

          <div className="lp-footer__links" aria-label="Footer navigation">
            <Link to="/about">About Us</Link>
            <a href="/#products">Products</a>
            <a href="/#services">Services</a>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="lp-footer__links" aria-label="Footer policies">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

        <div className="lp-footer__bottom">
          ©2026 TECHSIPTELTD. All rights reserved. Registered in Singapore.
        </div>
      </div>
    </footer>
  )
}
