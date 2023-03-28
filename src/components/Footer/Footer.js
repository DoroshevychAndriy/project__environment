import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer'>
            <div className="footer__container padd">
                <div className="footer__content">
                    <div className="footer__nav">
                        <div className="footer__nav__logo"></div>
                        <div className="footer__nav__block">
                        <div className="footer__navbar">
                            <ul>
                                <li><a href="#" className='active'>Our team</a></li>
                                <li><a href="#" className='footer__navbar__item'>About us</a></li>
                                <li><a href="#" className='footer__navbar__item'>Team</a></li>
                                <li><a href="#" className='footer__navbar__item'>What we do</a></li>
                                <li><a href="#" className='footer__navbar__item'>Contact</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className='active'>More</a></li>
                                <li><a href="#" className='footer__navbar__item'>Projects</a></li>
                                <li><a href="#" className='footer__navbar__item'>Events</a></li>
                                <li><a href="#" className='footer__navbar__item'>Donate</a></li>
                                <li><a href="#" className='footer__navbar__item'>Blog</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className='active'>Connect </a></li>
                                <li><a href="#" className='footer__navbar__item'>Facebook</a></li>
                                <li><a href="#" className='footer__navbar__item'>Instagram</a></li>
                                <li><a href="#" className='footer__navbar__item'>Twitter</a></li>
                                <li><a href="#" className='footer__navbar__item'>Linkdin</a></li>
                            </ul>
                        </div>
                        <div className="footer__nav__subscribe subscribe">
                            <div className="subscribe__input">
                                <div className="input__title news__title__text">Subscribe to get latest updates</div>
                                <form>
                                    <input type="text" name='subscribe' id='input1' placeholder='Your email' />
                                    <button className='subscribe__btn btn'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer