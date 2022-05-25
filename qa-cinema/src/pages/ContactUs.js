import React from 'react'
import ContactForm from '../components/ContactForm'; 
import styled from "styled-components"; 

function ContactUs() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}
  >
    <h1>Contact-Us</h1>
    <ContactForm/>
  

  </div>
);
};
  

export default ContactUs