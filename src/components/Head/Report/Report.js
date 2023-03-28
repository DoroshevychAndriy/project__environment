import React, { Component } from 'react'

export class Report extends Component {
  render() {
    return (
      <div className="component__report padd">
        <div className="report__content report">
            <div className="report__title">How we spend your <br /> donations and where it goes</div>
            <div className="report__subtitle">We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</div>
            <div className="report__parts">
                <ul>
                    <li>40% planting trees</li>
                    <li>35% cleanliness program</li>
                    <li>10% helping people</li>
                    <li>10% animal safety</li>
                    <li>5% feeding the poor</li>
                </ul>
                <div className="report__image image-bottom" id='1'></div>
            </div>
        </div>
        <div className="report__image image-top" id='2'></div>
      </div>
    )
  }
}

export default Report