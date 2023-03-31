import React, { Component } from 'react'
import News from '../Head/News/News'
import Example, { MediaMain } from './components/MediaMain'

export class Media extends Component {
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