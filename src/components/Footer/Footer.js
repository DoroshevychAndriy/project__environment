import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
                                <li><Link to="#" className='active'>Our team</Link></li>
                                <li><Link to="/about" className='footer__navbar__item'>About us</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Team</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>What we do</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Contact</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="#" className='active'>More</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Projects</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Events</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Donate</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Blog</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="#" className='active'>Connect </Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Facebook</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Instagram</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Twitter</Link></li>
                                <li><Link to="#" className='footer__navbar__item'>Linkdin</Link></li>
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