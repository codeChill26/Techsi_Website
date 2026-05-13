import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import aboutImg from '../assets/About_Image.jpg'
import missionIcon from '../assets/sliced/Icon_3/Icon_3_r1_c1.png'
import visionIcon from '../assets/sliced/Icon_3/Icon_3_r1_c2.png'
import valuesIcon from '../assets/sliced/Icon_3/Icon_3_r1_c3.png'
import hubIcon from '../assets/sliced/Icon_3/Icon_3_r2_c1.png'

import '../styles/landing.css'
import '../styles/about.css'

export default function AboutPage() {
  return (
    <div className="lp">
      <Header />
      <main>
        <section className="ab-hero" id="top">
          <div className="container">
            <div className="ab-hero__kicker">ABOUT US</div>
            <h1 className="ab-hero__title">
              A Singapore name in electronics distribution
            </h1>
            <p className="ab-hero__desc">
              TECHSI PTE LTD is a registered Singapore company operating at the
              intersection of electronic component wholesale and online service
              marketplaces.
            </p>
          </div>
        </section>

        <section className="ab-intro">
          <div className="container ab-intro__grid">
            <div className="ab-intro__media" aria-hidden="true">
              <img src={aboutImg} alt="Singapore skyline" />
            </div>

            <div className="ab-intro__content">
              <h2 className="ab-intro__title">
                Built in Singapore, trusted across Asia
              </h2>
              <p className="ab-intro__p">
                From our office at 42, West Coast Place, we serve OEMs, contract
                manufacturers and engineering teams who need a reliable partner
                for sourcing components and managing service procurement online.
              </p>
              <p className="ab-intro__p">
                Under the leadership of Director Mr. Francis Pang, we have grown
                into a trusted distribution and platform partner — combining the
                agility of a regional firm with global supply-chain reach.
              </p>

              <div className="ab-facts">
                <div className="ab-fact">
                  <div className="ab-fact__label">Registered office</div>
                  <div className="ab-fact__value">
                    42, West Coast Place, Singapore 127594
                  </div>
                </div>

                <div className="ab-fact">
                  <div className="ab-fact__label">Director</div>
                  <div className="ab-fact__value">Mr. Francis Pang</div>
                </div>

                <div className="ab-fact">
                  <div className="ab-fact__label">Telephone</div>
                  <div className="ab-fact__value">+65 6952 1642</div>
                </div>

                <div className="ab-fact">
                  <div className="ab-fact__label">Industry</div>
                  <div className="ab-fact__value">
                    Wholesale Electronics · Online Marketplaces
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ab-cards">
          <div className="container">
            <div className="ab-cards__grid">
              <article className="ab-card">
                <div className="ab-card__icon">
                  <img src={missionIcon} alt="" />
                </div>
                <h3 className="ab-card__title">Mission</h3>
                <p className="ab-card__text">
                  Make electronic component sourcing transparent, fast and
                  reliable for every engineering team in the region.
                </p>
              </article>

              <article className="ab-card">
                <div className="ab-card__icon">
                  <img src={visionIcon} alt="" />
                </div>
                <h3 className="ab-card__title">Vision</h3>
                <p className="ab-card__text">
                  Be Asia-Pacific&apos;s preferred bridge between global component
                  manufacturers and local innovators.
                </p>
              </article>

              <article className="ab-card">
                <div className="ab-card__icon">
                  <img src={valuesIcon} alt="" />
                </div>
                <h3 className="ab-card__title">Values</h3>
                <p className="ab-card__text">
                  Integrity, traceability and long-term partnership — every
                  order, every quotation, every transaction.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="ab-adv">
          <div className="container">
            <div className="ab-adv__row">
              <div className="ab-adv__icon" aria-hidden="true">
                <img src={hubIcon} alt="" />
              </div>
              <div>
                <h2 className="ab-adv__title">Singapore&apos;s hub advantage</h2>
                <p className="ab-adv__text">
                  Singapore&apos;s strategic location, world-class logistics
                  infrastructure and pro-business regulatory environment make it
                  the ideal headquarters for serving the entire Asia-Pacific
                  electronics market. We leverage that advantage on behalf of
                  every customer we work with.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
