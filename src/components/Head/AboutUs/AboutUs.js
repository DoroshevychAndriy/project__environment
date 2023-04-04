// rce

import React, { Component } from 'react'

import img1 from '../../../img/icon/Logo1.png';
import img2 from '../../../img/icon/Logo2.png';
import img3 from '../../../img/icon/Logo3.png';
import img4 from '../../../img/icon/Logo4.png';
import img5 from '../../../img/icon/Logo5.png';
import img6 from '../../../img/icon/Logo6.png';
import { Link } from 'react-router-dom';


export class AboutUs extends Component {
  render() {
    return (
      <div className='component__about padd'>
        <div className="section__container-top">
            <section className="section__container ">
                <div className="part">
                    <hr />
                    <div className="part__text">Know About us</div>
                </div>
                <div className='section__content'>
                    <h2>We help nature smile and survive everywhere</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <p className='section__text'>  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <Link to='/blog_post' className='section__btn btn'>Learn more</Link>
                </div>
            </section>
            <div className="about__img"></div>
        </div>
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
    )
  }
}

export default AboutUs;