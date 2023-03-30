import React, { Component } from 'react'

export class Awards extends Component {
  render() {
    return (
        <div className="component__awards">
            <div className="container__padd">
                <div className="awards__title">
                    <h2>Awards & Recognitions</h2>
                </div>
                <div className="awards__items">
                    <div className='awards__item' >
                        <div className="awards__item__img" id='award1'></div>
                        <div className="awards__item__year">2021</div>
                        <div className="awards__item__name">Best NGO Award</div>
                        <div className="awards__item__text">Berlin, Germany</div>
                    </div>
                    <div className='awards__item'>
                        <div className="awards__item__img" id='award2'></div>
                        <div className="awards__item__year">2018</div>
                        <div className="awards__item__name">Global Award</div>
                        <div className="awards__item__text">New York, USA</div>
                    </div>
                    <div className='awards__item'>
                        <div className="awards__item__img" id='award3'></div>
                        <div className="awards__item__year">2014</div>
                        <div className="awards__item__name">Best NGO Award</div>
                        <div className="awards__item__text">New Delhi, India</div>
                    </div>
                    <div className='awards__item'>
                        <div className="awards__item__img" id='award4'></div>
                        <div className="awards__item__year">2021</div>
                        <div className="awards__item__name">Foresto Award</div>
                        <div className="awards__item__text">Vienna, Austria</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Awards