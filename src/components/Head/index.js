import React, { Component } from 'react'
import AboutUs from './AboutUs/AboutUs'
import Donate from './Donate/Donate'
import Main from './Main/Main'
import News from './News/News'
import Project from './Projects/Project'
import Report from './Report/Report'
import WhatWeDo from './WhatWeDo/WhatWeDo'


export class Head extends Component {
  componentDidMount(){
    let header = document.querySelector('.component__header');
    header.classList.remove('header__active')
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Main />
        <AboutUs />
        <WhatWeDo />
        <Project />
        <Report />
        <Donate />
        <News />
      </div>
    )
  }
}

export default Head