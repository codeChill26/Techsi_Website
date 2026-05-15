import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

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
                    A Singapore-based wholesaler of electronic and telecommunication components connecting global
                    manufacturers with engineering teams across Asia-Pacific.
                  </em>
                </div>
                <div className="lp-footer__contactList" aria-label="Contact information">
                  <div className="lp-footer__contactItem">
                    <MapPin className="lp-footer__contactIcon" aria-hidden="true" />
                    <span className="lp-footer__contactText">
                      42, West Coast Place, Singapore 127594
                    </span>
                  </div>
                  <div className="lp-footer__contactItem">
                    <Phone className="lp-footer__contactIcon" aria-hidden="true" />
                    <a className="lp-footer__contactText" href="tel:+6569521642">
                      +65 69521642
                    </a>
                  </div>
                  <div className="lp-footer__contactItem">
                    <Mail className="lp-footer__contactIcon" aria-hidden="true" />
                    <a className="lp-footer__contactText" href="mailto:Francis@techsipl.com">
                      Francis@techsipl.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lp-footer__links" aria-label="Footer navigation">
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
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
