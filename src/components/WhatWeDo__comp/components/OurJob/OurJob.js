import React, { Component } from 'react'
import icon1 from '../img/Icon1.png';
import icon2 from '../img/Icon2.png';
import icon3 from '../img/Icon3.png';
import icon4 from '../img/Icon4.png';
import icon5 from '../img/Icon5.png';
import icon6 from '../img/Icon6.png';

export class OurJob extends Component {
  render() {
    return (
        <div className='component__ourjob'>
        <div className="ourjob__content">
            <div className="ourjob__content-title">What we do for the environment</div>
            <div className="ourjob__content-items">
            <div className="whatwedo__content">
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon1} alt="icon1" /></div>
                            <div className="item__text">
                                <div className="item__title">Build Healthy Cities</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon2} alt="icon2" /></div>
                            <div className="item__text">
                                <div className="item__title">Tree Plantation</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon3} alt="icon3" /></div>
                            <div className="item__text">
                                <div className="item__title">Protect Land and Water</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon4} alt="icon4" /></div>
                            <div className="item__text">
                                <div className="item__title">Animal Safety</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon5} alt="icon5" /></div>
                            <div className="item__text">
                                <div className="item__title">Tree plantation</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                            </div>
                        </div>
                        <div className="whatwedo__item">
                            <div className="item__icon"><img src={icon6} alt="icon6" /></div>
                            <div className="item__text">
                                <div className="item__title">Biodiversity</div>
                                <div className="item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                            </div>
                        </div>

            </div>
            </div>
        </div>
        </div>
    )
  }
}

export default OurJob