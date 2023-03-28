import React, { Component } from 'react'
import AboutUs from './AboutUs/AboutUs'
import Donate from './Donate/Donate'
import Main from './Main/Main'
import News from './News/News'
import Project from './Projects/Project'
import Report from './Report/Report'
import WhatWeDo from './WhatWeDo/WhatWeDo'

export class Head extends Component {
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