import heroBg from '../assets/Hero_background.png'
import wave1 from '../assets/Wave_1.png'

export default function HeroSection() {
    return (
        <section
            className="lp-hero lp-hero--bg"
            id="top"
            style={{ '--lp-hero-bg': `url(${heroBg})` }}
        >
            <div className="container lp-hero__grid">
                <div className="lp-hero__left">
                    <div className="lp-hero__kicker">
                        Singapore
                        <br />
                        Established
                        <br />
                        Wholesaler
                    </div>

                    <div className="lp-hero__buttons">
                        <button className="lp-btn" type="button">
                            Explore Products<span className="lp-btn__arrow" aria-hidden />
                        </button>
                        <button className="lp-btn" type="button">
                            Request a Quote
                        </button>
                    </div>
                </div>

                <div className="lp-hero__right">
                    <h1 className="lp-hero__title">
                        Powering
                        <br />
                        Asia&apos;s Electronics
                        <br />
                        Supply Chain
                    </h1>
                    <p className="lp-hero__desc">
                        TECHSI PTE LTD distributes high-quality electronic components and
                        operates online service marketplaces — connecting global
                        manufacturers with engineering teams across the region.
                    </p>
                </div>
            </div>

            <div className="lp-section-wave lp-section-wave--hero" aria-hidden="true">
                <img className="lp-section-wave__img" src={wave1} alt="" />
            </div>
        </section>
    )
}
