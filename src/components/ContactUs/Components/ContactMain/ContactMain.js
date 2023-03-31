import React, { Component } from 'react'

export class ContactMain extends Component {

  render() {
    return (
        <div>
            <div className="container__padd">
                <div className="main__content">
                    <div className="main__title">
                        <div className="part">
                            <hr />
                            <div className="part__text">Contact us</div>
                        </div>
                        <div className="main__title-text">We'd love to hear from you</div>
                        <div className="main__subtitle-text">Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</div>
                    </div>
                    <div className="contact__details">
                        <div className="contact__details__data">
                        <div className="contact__details__info details__info">
                            <div className="details__info__title">Let's talk! </div>
                            <div className="details__info__text info__text">
                                <a href='tel:+123456789' className="info__text__number">+1 23 456 789</a>
                                <a href='mailto: hello@finsweet.com' className="info__text__email">hello@finsweet.com</a>
                            </div>
                        </div>
                        <div className="contact__details__info details__info">
                            <div className="details__info__title">Headoffice</div>
                            <div className="details__info__text info__text">
                                <div className="info__text__text">8 Brewery Drive, Hudson, NH 03051 USA</div>
                            </div>
                        </div>
                        <div className="contact__details__info details__info">
                            <div className="details__info__title">Branch Office</div>
                            <div className="details__info__text info__text">
                                <div className="info__text__text">178 Marconi St., Venice, 34293 Italy</div>
                            </div>
                        </div>
                        </div>
                        <div className="contact__details__social details__social">
                            <a href='#' className="details__social__item" id='social1'></a>
                            <a href='#' className="details__social__item" id='social2'></a>
                            <a href='#' className="details__social__item" id='social3'></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default ContactMain