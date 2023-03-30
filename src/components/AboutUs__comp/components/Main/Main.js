import React, { Component } from 'react'

import img1 from '../../../../img/icon/Logo1.png';
import img2 from '../../../../img/icon/Logo2.png';
import img3 from '../../../../img/icon/Logo3.png';
import img4 from '../../../../img/icon/Logo4.png';
import img5 from '../../../../img/icon/Logo5.png';
import img6 from '../../../../img/icon/Logo6.png';


export class MainComp extends Component {
  render() {
    return (
      <div className='main__container'>
        <div className="container__padd">
          <div className="part">
              <hr />
              <div className="part__text">Know about us</div>
          </div>
          <div className="main__content">
              <div className="main__title">We are a nonprofit team working worldwide</div>
              <div className="main__subtitle">
                  <div className="main__subtitle__text" id='text1'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
                  <div className="main__subtitle__text" id='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</div>
              </div>
          </div>
        </div>
        <div className="main__wrapper">
            <div className="back__video main__video">
              <a href="#" className='link__video'></a>  
            </div>
          <div className="main__section__missions">
            <div className="container__padd">
              <div className="main__mission">
                <div className="main__mission__ontitle">our mission</div>
                <div className="main__mission__title">We make the world we save our own environment</div>
                <div className="main__mission__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
              </div>
              <div className="main__mission">
                <div className="main__mission__ontitle">our mission</div>
                <div className="main__mission__title">We make the world we save our own environment</div>
                <div className="main__mission__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
              </div>
            </div>
            <div className="container__padd">
              <div className="section__container-bottom">
                <div className="support">
                    <div className='support__text'>our Supporters</div>
                    <hr />
                    <div className="supporters__company">
                        <ul>
                            <li><a href="#"><img src={img1} alt="company1" /></a></li>
                            <li><a href="#"><img src={img2} alt="company2" /></a></li>
                            <li><a href="#"><img src={img3} alt="company3" /></a></li>
                        </ul> 
                        <ul>
                            <li><a href="#"><img src={img4} alt="company4" /></a></li>
                            <li><a href="#"><img src={img5} alt="company5" /></a></li>
                            <li><a href="#"><img src={img6} alt="company6" /></a></li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default MainComp