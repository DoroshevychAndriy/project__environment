import React, { Component } from 'react'

export class Features extends Component {
  render() {
    return (
      <div className='component__features'>
        <div className="features">
            <div className="features__items">
                <div className="features__item__title">200+ Plantation in 1 week</div>
                <div className="features__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="features__items">
                <div className="features__item__title">230 People Have donated</div>
                <div className="features__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="features__items">
                <div className="features__item__title">30+ people joined </div>
                <div className="features__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="features__items">
                <div className="features__item__title">$324 Raised for this initiate</div>
                <div className="features__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Features