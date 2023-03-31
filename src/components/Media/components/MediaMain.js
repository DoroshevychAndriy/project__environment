import React, { Component } from 'react'

export class MediaMain extends Component {

    componentDidMount(){
        let link = document.querySelectorAll('.menu ul li a');
        let inActive = document.querySelector('.menu ul li a#active');
        let header = document.querySelector('.component__header');
        if(inActive.classList == 'menu__link active'){
            header.classList.add('header__active');
        }
        link.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target.getAttribute('id') === 'active'){
                    header.classList.add('header__active');
                } else{
                    header.classList.remove('header__active');
                }
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container__padd">
                    <div className="main__content">
                        <div className="main__title">
                            <div className="part">
                                <hr />
                                <div className="part__text">Top news</div>
                            </div>
                            <div className="main__title-text">Our goal is to make water available for everyone</div>
                            <div className="main__subtitle-text">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
                            <button className="media__main__btn btn">Read more</button>
                        </div>
                        <div className="media-main__items">
                            <div className='media-main__item media__item'>
                                <div className="media__item__img" id='media1'></div>
                                <div className="media__item__text">
                                    <div className="media__item__title">Don’t destroy greenery and don’t spoil scenery.</div>
                                    <div className="media__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
                                </div>
                            </div>
                            <div className='media-main__item media__item'>
                                <div className="media__item__img" id='media2'></div>
                                <div className="media__item__text">
                                    <div className="media__item__title">Why saving wildlife is extremely important</div>
                                    <div className="media__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
                                </div>
                            </div>
                            <div className='media-main__item media__item'>
                                <div className="media__item__img" id='media3'></div>
                                <div className="media__item__text">
                                    <div className="media__item__title">Caring for the present is caring for the future</div>
                                    <div className="media__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaMain
