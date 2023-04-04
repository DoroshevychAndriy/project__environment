import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class News extends Component {
  render() {
    return (
      <div className="component__news">
        <div className="news__title">
            <div className="news__title__text">Read Our News</div>
            <hr className="news__title__hr" />
        </div>
        <div className="news__content">
            <div className="news__item">
                <div className="news__item__img" id='newItem1'></div>
                <div className="news__item__title">Don’t destroy greenery and don’t spoil scenery</div>
                <div className="news__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
            </div>
            <div className="news__item" >
                <div className="news__item__img" id='newItem2'></div>
                <div className="news__item__title"> Is climate change happening faster than expected?</div>
                <div className="news__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
            </div>
            <div className="news__item" >
                <div className="news__item__img" id='newItem3'></div>
                <div className="news__item__title">Top 10 facts about wind farms you didn't know</div>
                <div className="news__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
            </div>
            <div className="news__item" >
                <div className="news__item__img" id='newItem4'></div>
                <div className="news__item__title">Our goal is to make water available for everyone</div>
                <div className="news__item__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscin</div>
            </div>
        </div>
        <div className="news__title">
            <div className="news__title__text">Our Events</div>
            <hr className="news__title__hr" />
        </div>
        <div className="news__events">
          <div className="event">
            <div className="event__time">
              <span className='day'>23</span>
              <span className='month'>SEP</span>
            </div>
            <div className="event__title">
              <div className="event__title__part">
                <div className="event__title__part-text">Next Events</div>
                <hr className="event__title__part-hr" />
              </div>
              <div className="event__title__content">
                <div className="event__title-text">Say no to plastic usage and save the planet</div>
                <Link to='/events' className='event__title-arrow'></Link>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="event__time">
              <span className='day'>25</span>
              <span className='month'>SEP</span>
            </div>
            <div className="event__title">
              <div className="event__title__part">
                <div className="event__title__part-text">Next Events</div>
                <hr className="event__title__part-hr" />
              </div>
              <div className="event__title__content">
                <div className="event__title-text">Weekly cleaning program</div>
                <Link to='/events' className='event__title-arrow'></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News