import React, { Component } from 'react'
import Awards from './components/Awards/Awards'
import Journey from './components/Journey/Journey'
import MainComp from './components/Main/Main'
import Team from './components/Team/Team'
import Donate from '../../components/Head/Donate/Donate'
import News from '../../components/Head/News/News'

export class AboutUsComp extends Component {
  render() {
    return (
      <div>
        <MainComp />
        <Awards />
        <div className="container__padd">
          <Journey />
          <Team />
          <Donate />
          <News />
        </div>
      </div>
    )
  }
}

export default AboutUsComp