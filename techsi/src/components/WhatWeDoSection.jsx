import handshakeImg from '../assets/imga.jpg'

export default function WhatWeDoSection() {
  return (
    <section className="lp-what" id="about">
      <div className="lp-split lp-split--media">
        <div className="lp-what__left">
          <div className="container">
            <h2 className="lp-what__title">What we do</h2>
            <p className="lp-what__sub">
              Two complementary business lines — one mission
              <br />
              <em>
                make sourcing electronics and engineering services radically
                simpler
              </em>
            </p>
          </div>
        </div>
        <div className="lp-media lp-media--what" aria-hidden="true">
          <img className="lp-media__img" src={handshakeImg} alt="" />
        </div>
      </div>
    </section>
  )
}
