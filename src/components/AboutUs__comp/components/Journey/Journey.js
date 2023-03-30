import React, { Component } from 'react'

export class Journey extends Component {
  render() {
    return (
      <div className="component__journey">
        <div className="journey__content">
            <section className="journey">
                <div className="support__text">OUR JOURNEY </div>
                <div className="journey__title awards__title">
                    <h2>How we raised 34M</h2>
                </div>
                <div className="journey__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
                </div>
                <div className="journey__numbers">
                    <div className="journey__numbers number__text">
                        <div className="number__text__amount">34M+</div>
                        <div className="number__text__subamount">Donation Received</div>
                    </div>
                    <div className="journey__numbers number__text">
                        <div className="number__text__amount">400+</div>
                        <div className="number__text__subamount">Volunters</div>
                    </div>
                    <div className="journey__numbers number__text">
                        <div className="number__text__amount">40K+</div>
                        <div className="number__text__subamount">Trees planted</div>
                    </div>
                </div>
            </section>
            <div className="journey__img"></div>
        </div>
      </div>
    )
  }
}

export default Journey