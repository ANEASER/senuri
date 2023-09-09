import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <h1 className='contactPageTitle' style={{textAlign:'center'}}>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to contact</span>
      <form className='contactForm'>
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
