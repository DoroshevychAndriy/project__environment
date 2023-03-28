import React, { Component } from 'react'

export class Donate extends Component {
  render() {
    return (
      <div className="component__donate padd">
        <div className="donate__title">You can contribute to make the environment greener!</div>
        <div className="donate__buttons">
            <div className="donate__btn" id='donate-btn-1'>Join as a volunteer</div>
            <div className="donate__btn" id='donate-btn-2'>Donate</div>
        </div>
      </div>
    )
  }
}

export default Donate