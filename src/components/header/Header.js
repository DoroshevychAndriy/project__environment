import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import img from "../../img/logo/logo.png";

export class Header extends Component {
    setActive = ({isActive}) => isActive ? "active-link" : '';

    showMenu(){
        let burger = document.querySelector('.menu')
        burger.style.left = 0;
        document.querySelector('body').classList.add('active')
    }
    hideMenu(){
        document.querySelector('.menu').style.left = '-60%';
        document.querySelector('body').classList.remove('active')
    }
    
    
    render() {
        return (
            <div className='component__header'>
                <header className='header'>
                    <div className='header__logo'>
                        <img src={img} alt="logo" />
                    </div>
                    <div className="header__menu">
                    <div className="menu">
                        <ul>
                            <li className='burger'><p onClick={this.hideMenu}>&#9932;</p></li>
                            <li>
                                <NavLink to="project__environment" setActive className='menu__link'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" setActive className='menu__link'>About us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/whatwedo" setActive className='menu__link'>What We Do</NavLink>
                            </li>
                            <li>
                                <NavLink to="/media" id='active' setActive className='menu__link'>Media</NavLink>
                            </li>
                            <li>
                                <NavLink to="/project__environment/contact" setActive className='menu__link'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <button className='header__btn btn'>Donate</button>
                    <div onClick={this.showMenu} className='burger__menu'><p>&#9776;</p></div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header