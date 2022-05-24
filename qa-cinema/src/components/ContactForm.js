import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiSun } from 'react-icons/bi';
import {StyledContactForm} from '../styles/ContactForm.style';
import styled from "styled-components"; 

function ContactForm() {
    <h4>hello world</h4>
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = formData;

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const styledIcon = {
    fontSize: '1.6rem',
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContactForm>
      <div className='info'>
        <h3>Contact information</h3>

        <div className='contact'>
          <AiOutlineMail style={styledIcon} />

          <span>
            Email
            <p>hello@tesla.com</p>
          </span>
        </div>

        <div className='contact'>
          <BsTelephone style={styledIcon} />

          <span>
            Phone
            <p>+49 (800) 335 35 35</p>
          </span>
        </div>

        <div className='contact'>
          <GoLocation style={styledIcon} />

          <span>
            Address
            <p>844 Morris Park avenue</p>
          </span>
        </div>

        <div className='contact'>
          <BiSun style={styledIcon} />

          <span>
            Working hours
            <p>8 a.m. – 11 p.m.</p>
          </span>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <h3>Get in touch</h3>

        <div className='grid'>
          <label htmlFor='name'>
            Your name
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Your name'
              onChange={onChange}
            />
          </label>

          <label htmlFor='email'>
            Your email
            <input
              type='email'
              name='email'
              value={email}
              required
              placeholder='Your email'
              onChange={onChange}
            />
          </label>

          <label htmlFor='subject'>
            Subject
            <input
              type='text'
              name='subject'
              value={subject}
              required
              placeholder='Subject'
              onChange={onChange}
            />
          </label>

          <label htmlFor='message'>
            Your message
            <textarea
              type='text'
              name='message'
              value={message}
              placeholder='Your message'
              onChange={onChange}
            />
          </label>
        </div>

        <button type='submit'>Send message</button>
      </form>
    </StyledContactForm>
  );
}

export default ContactForm;