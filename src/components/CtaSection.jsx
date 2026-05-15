import contactBg from '../assets/Contact_background.png';

export default function CtaSection() {
  return (
    <section
      className="lp-cta lp-cta--bg"
      id="contact"
      style={{ '--lp-cta-bg': `url(${contactBg})` }}
    >
      <div className="container lp-cta__grid">
        <div>
          <h2 className="lp-cta__title">
            Ready to source
            <br />
            with confidence?
          </h2>
          <p className="lp-cta__desc">
            <em>
              Tell us about your BOM or service requirement.
              <br />
              Our Singapore team will respond within one business day.
            </em>
          </p>
        </div>
        <div className="lp-cta__spacer" aria-hidden="true" />
      </div>

      <a className="lp-cta__link" href="/contact">
        Contact TECHSI
      </a>

      {/* <div className="lp-section-wave lp-section-wave--cta" aria-hidden="true">
        <img className="lp-section-wave__img" src={wave2} alt="" />
      </div> */}
    </section>
  )
}
