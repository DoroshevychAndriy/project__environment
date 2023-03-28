import React, { Component } from 'react'

export class Project extends Component {
  render() {
    return (
        <div className='component__about component__project padd'>
        <div className="part">
                <hr />
                <div className="part__text">Projects we have done</div>
            </div>
            <div className="section__container-top ">         
                <section className="section__container component__project whatwedo">          
                    <div className='section__content component__project'>
                        <h2>We are Creating sustainable society, for everyone and forever.</h2>
                    </div>
                    <div className="projects">
                        <div className="project__item" id='item1'>
                            <div className="project__item-title">Mission 40K: Tree plantation</div>
                            <div className="project__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            <div className="project__item-btn btn">See more</div>
                        </div>
                        <div className="project__item" id='item2'>
                            <div className="project__item-title">Weekly cleanliness program in city</div>
                            <div className="project__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            <div className="project__item-btn btn">See more</div>
                        </div>
                        <div className="project__item" id='item3'>
                            <div className="project__item-title">Wildlife safety program 2021</div>
                            <div className="project__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                            <div className="project__item-btn btn">See more</div>
                        </div>
                    </div>
                </section>
            </div>
      </div>
    )
  }
}

export default Project