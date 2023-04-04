import React, { Component } from 'react'

export class EventReadMain extends Component {
  render() {
    return (
      <div className='event-read__main'>
        <div className="event-read__title">Say no to using plastic and save Earth</div>
        <div className="event-read__data">
            <div className="data__loc"><a href="#">8 Brewery Drive, Hudson, NH 03051, USA</a></div>
            <div className="data__number">September 3, 2021 8:30 AM</div>
        </div>
      </div>
    )
  }
}

export default EventReadMain