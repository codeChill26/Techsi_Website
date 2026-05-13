import iActivePassive from '../assets/sliced/Icon_2/Icon_2_r1_c1.png'
import iMicrocontrollers from '../assets/sliced/Icon_2/Icon_2_r1_c2.png'
import iConnectors from '../assets/sliced/Icon_2/Icon_2_r2_c1.png'
import iPowerMgmt from '../assets/sliced/Icon_2/Icon_2_r2_c2.png'
import inventoryImg from '../assets/z7819099300495_5ca4bf0101b7f430c6a446623eba54ba.jpg'

export default function InventorySection() {
  return (
    <section id="products">
      <div className="lp-inventory">
        <div className="lp-split lp-split--media">
          <div className="lp-inventory__left">
            <div className="container">
              <div className="lp-inventory__titleRow">
                <div className="lp-inventory__kicker">INVENTORY</div>
                <div className="lp-inventory__from">From</div>
              </div>
              <h2 className="lp-inventory__title">
                single passives
                <br />
                to full reels
              </h2>
              <p className="lp-inventory__desc">
                <em>
                  Whether you&apos;re prototyping a new device or running
                  <br />
                  a high-volume production line, our Singapore
                  <br />
                  warehouse stocks the components you need —
                  <br />
                  and the procurement team to source what we
                </em>
              </p>
            </div>
          </div>
          <div className="lp-media lp-media--inventory" aria-hidden="true">
            <img className="lp-media__img" src={inventoryImg} alt="" />
          </div>
        </div>
      </div>

      <div className="lp-inventory-list">
        <div className="container">
          <div className="lp-inventory-list__grid">
            <div className="lp-mini lp-inventory-item lp-inventory-item--a">
              <img src={iActivePassive} alt="" />
              <span>Active &amp; passive components</span>
            </div>

            <div className="lp-mini lp-inventory-item lp-inventory-item--b">
              <img src={iMicrocontrollers} alt="" />
              <span>Microcontrollers and SoCs</span>
            </div>

            <button className="lp-pill lp-inventory-item lp-inventory-item--btn" type="button">
              Browse the catalogue
            </button>

            <div className="lp-mini lp-inventory-item lp-inventory-item--c">
              <img src={iPowerMgmt} alt="" />
              <span>Power management ICs</span>
            </div>

            <div className="lp-mini lp-inventory-item lp-inventory-item--d">
              <img src={iConnectors} alt="" />
              <span>Connectors, cables &amp; enclosures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
