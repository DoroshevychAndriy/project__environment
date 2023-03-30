import React, { Component } from 'react'

export class Error extends Component {
  render() {
    return (
      <div className='error'>
        <h2>Такого URL запросу не існує!</h2>
        <div className='error__text'>Введіть правильний адрес</div>
      </div>
      
    )
  }
}

export default Error