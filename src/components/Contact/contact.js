import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('SERIVICE ID', 'template_id', form.current, 'public_key')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div id="contact">
      <h1 className='contactPageTitle' style={{textAlign:'center'}}> <span style={{color:'yellow'}}>Contact</span> Me</h1>
      <span className='contactDesc'>Please fill out the form below to contact</span>
      <form className='contactForm' ref={form} >
        <input type="text" className='name' placeholder='Your Name' />
        <input type="email" className='email' placeholder='Your Email' />
        <textarea className='msg' name="message" rows="5"></textarea> 
        <button type='submit' className='submitButton' value='Send' style={{textAlign:'center',marginTop:'1%'}}>Submit</button>
        <div className='links'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
