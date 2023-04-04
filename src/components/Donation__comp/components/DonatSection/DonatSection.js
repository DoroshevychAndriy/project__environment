import React, { Component, useState } from 'react';

export class DonatSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
          showActiveOption: 'option1'
        };
        this.showActive = this.showActive.bind(this);
      }
    

    showActive(event){
        let a = document.querySelectorAll('.tabs__option');
        let b = document.querySelector('.tabs__options');

        b.childNodes.forEach(item => {
            console.log(event.target.id);
            // console.log(item.id);
                this.setState({ showActiveOption: event.target.id})
                if(event.target.id === this.state.showActiveOption){
                    event.target.classList.add('option__active')
                } else{
                    item.classList.remove('option__active')
                }
                if(event.target.id == 'option1'){
                    event.target.classList.add('option__active');
                    this.setState({ showText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' })
                } else if(event.target.id == 'option2'){
                    event.target.classList.add('option__active')
                    this.setState({ showText : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque laborum sed molestias a non velit incidunt quis? Numquam dignissimos quia nemo vero! Provident consectetur itaque aliquam eum quo, ullam eos, minus distinctio deleniti voluptates alias voluptas recusandae porro fuga accusantium.' })
                } else if(event.target.id == 'option3'){
                    event.target.classList.add('option__active')
                    this.setState({ showText : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam ipsa explicabo porro hic, dicta adipisci repellat, eos ducimus, facilis modi perspiciatis et. In laborum accusantium mollitia nostrum! Ratione necessitatibus iure ut, ab adipisci quam?' })
                } else{
                    item.classList.remove('option__active')
                }
        })
    }

  render() {
    return (
        <div className='comp__donate__section'>
            <section className='section'>
                <div className="section__title">How you can contribute to protect Earth</div>
                <div className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
            </section>
            <div className="tabs">
                <div className="tabs__options" onClick={this.showActive} >
                    <div className="tabs__option option__active" id='option1'>Overview</div>
                    <div className="tabs__option" id='option2'>Impact</div>
                    <div className="tabs__option" id='option3'>What You get</div>
                </div>
                <div className="tabs__text">
                    <p>{this.state.showText}</p>
                    <p>{this.state.showActiveOption}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default DonatSection