import React, { Component } from 'react'
import MainComp from '../AboutUs__comp/components/Main/Main'
import Donate from '../Head/Donate/Donate'
import News from '../Head/News/News'
import Project from '../Head/Projects/Project'
import HeadMain from './components/HeadMain/HeadMain'
import OurJob from './components/OurJob/OurJob'


export class WhatWeDoComp extends Component {
  componentDidMount(){
    let header = document.querySelector('.component__header');
    header.classList.remove('header__active');
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className='whatwedo__comp'>
        <HeadMain />
        <OurJob />
        <Project />
        <Donate />
        <News />
      </div>
    )
  }
}

export default WhatWeDoComp