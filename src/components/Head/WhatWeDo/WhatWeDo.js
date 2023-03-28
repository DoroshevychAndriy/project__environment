import React, { Component } from 'react'
import icon1 from '../../../img/icon/Icon1.png';
import icon2 from '../../../img/icon/Icon2.png';
import icon3 from '../../../img/icon/Icon3.png';
import icon4 from '../../../img/icon/Icon4.png';

export class WhatWeDo extends Component {
  render() {
    return (
      <div className='component__about component__whatwedo padd'>
        <div className="part">
                <hr />
                <div className="part__text">What we do</div>
            </div>
            <div className="section__container-top ">
            
                <section className="section__container whatwedo">
                
                <div className='section__content section__content__whatwedo'>
                    <h2>We care for earth, care for the coming birth</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

                    <div className="whatwedo__content">
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon1} alt="icon1" /></div>
                            <div className="item__text">
                                <div className="item__title">Build Healthy Cities</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon2} alt="icon2" /></div>
                            <div className="item__text">
                                <div className="item__title">Tree Plantation</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon3} alt="icon3" /></div>
                            <div className="item__text">
                                <div className="item__title">Protect Land and Water</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon4} alt="icon4" /></div>
                            <div className="item__text">
                                <div className="item__title">Animal Safety</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="whatwedo__content">
                    <div className="whatwedo__img"></div>
                </div>
            </section>
        </div>
      </div>
    )
  }
}

export default WhatWeDo;