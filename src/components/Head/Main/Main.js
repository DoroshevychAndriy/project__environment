import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <div className='component__main'>
        <div className="main__block">
            <div className="main__title">Save the environment today for a better tomorrow</div>
            <div className="main__subtitle">
                <div className="main__btn">
                    <button className='btn'>What we do</button>
                </div>
                <a href='#' className="main__video">
                    <div className="main__video__icon"></div>
                    <div className="main__video__text">Play Video</div>
                </a>
            </div>
            <div className="main__bottom">
                <div className="main__bottom__text">23,800 trees planted</div>
                <hr className='main__bottom__line'/>
                <div className='main__bottom__text'>5840 donations collected</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Main