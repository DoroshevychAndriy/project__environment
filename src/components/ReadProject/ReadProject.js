import React, { Component } from 'react'
import ReadProjectMain from './components/ReadProjectMain/ReadProjectMain'
import Features from './components/Features/Features'
import Project from '../Head/Projects/Project'
import Donate from '../Head/Donate/Donate'

export class ReadProject extends Component {

  componentDidMount(){
    let header = document.querySelector('.component__header');
    header.classList.remove('header__active')
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='component__readprojects'>
        <ReadProjectMain />
        <Features />
        <Project />
        <Donate />
      </div>
    )
  }
}

export default ReadProject