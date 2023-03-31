import React, { Component } from 'react'
import ContactMain from './Components/ContactMain/ContactMain'
import ContactForm from './Components/ContactForm/ContactForm';
import Maps from './Components/ContactMaps/Maps';

export class ContactUs extends Component {
    componentDidMount(){
        let link = document.querySelectorAll('.menu ul li a');
        let inActive = document.querySelector('.menu ul li a#activeCont');
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
      <div className='component__contacts'>
        <ContactMain />
        <ContactForm />
        <Maps />
      </div>
    )
  }
}

export default ContactUs