import heroBg from '../assets/Hero_background.png';
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
    const navigate = useNavigate()

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
                </div>

                <div className="lp-hero__right">
                    {/* <div className="lp-hero__figure" aria-hidden="true">
                        <img className="lp-hero__figureImg" src={wave1} alt="" />
                    </div> */}
                    <h1 className="lp-hero__title">
                        Powering
                        <br />
                        Asia&apos;s Electronics
                        <br />
                        Supply Chain
                    </h1>
                    <p className="lp-hero__desc">
                        TECHSI PTE LTD distributes high-quality electronic and
                        telecommunication components — connecting global
                        manufacturers with engineering teams across the region.
                    </p>

                    <div className="lp-hero__buttons">
                        <button
                            className="lp-btn"
                            type="button"
                            onClick={() => navigate('/products')}
                        >
                            Explore Products<span className="lp-btn__arrow" aria-hidden />
                        </button>
                        <button
                            className="lp-btn"
                            type="button"
                            onClick={() => navigate('/contact')}
                        >
                            Request a Quote
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="lp-section-wave lp-section-wave--hero" aria-hidden="true">
                <img className="lp-section-wave__img" src={wave1} alt="" />
            </div> */}
        </section>
    )
}
