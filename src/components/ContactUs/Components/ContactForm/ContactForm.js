import React, { Component } from 'react'

export class ContactForm extends Component {
  render() {
    return (
      <div className='contact__form'>
        <form>
            <div className='form__names'>
                <label htmlFor="name">
                    Name
                    <input name='name' placeholder='John' type="text" />
                </label>
                <label htmlFor="surname">
                    Surname
                    <input name='surname' placeholder='Doe' type="text" />
                </label>
            </div>
            <div className='form__email'>
                <label htmlFor="email">
                    Email id
                    <input name='email' placeholder='johndoe@gmail.com' type='email' />
                </label>
                <label htmlFor="subject">
                    Subject
                    <input name='subject' type="text" />
                </label>
            </div>
            <div className='form__messege'>
                <label htmlFor="messege">
                    Message
                    <textarea placeholder='Type your Messege' name='messege' type="text" />
                </label>
            </div>
            <div className="form__button">
                <button type="submit" className='form__btn btn'>Send message</button>
            </div>
        </form>
      </div>
    )
  }
}

export default ContactForm