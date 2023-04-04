import React, { Component } from 'react'
import News from '../Head/News/News'
import Example, { MediaMain } from './components/MediaMain'


export class Media extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className='media-main whatwedo__comp'>
        <MediaMain />
        <News />
      </div>
    )
  }
}

export default Media