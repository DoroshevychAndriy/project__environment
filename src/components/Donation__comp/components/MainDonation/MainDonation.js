import React, { Component } from 'react'

export class MainDonation extends Component {

componentDidMount(){
    const a = document.querySelector('.component__main__donation');
    const header = document.querySelector('.component__header');
    header.classList.remove('header__active')
    if(a){
        header.classList.add('header__active');
    }
}


  render() {
    return (
            <div className="main__content">
                <div className="main__title">
                    <div className="part">
                        <hr />
                        <div className="part__text">Donate</div>
                    </div>
                    <div className="main__title-text">Making a donation for Nature.</div>
                    <div className="main__subtitle-text">When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.</div>
                    <div className="main__donation__btn btn">Donate now</div>
                </div>
                <div className="main__donation__img"></div>
            </div>
    )
  }
}

export default MainDonation