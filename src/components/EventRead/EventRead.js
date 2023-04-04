import React, { Component } from 'react'
import EventReadMain from './components/EventReadMain/EventReadMain'
import EventReadBody from './components/EventReadBody/EventReadBody';
import News from '../Head/News/News';

export class EventRead extends Component {
  componentDidMount(){
      let header = document.querySelector('.component__header');
      header.classList.add('header__active')
      window.scrollTo(0, 0);
    }
  render() {
    return (
      <div className='component__event-read'>
        <EventReadMain />
        <EventReadBody />
        <News />
      </div>
    )
  }
}

export default EventRead