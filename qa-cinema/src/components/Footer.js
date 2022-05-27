import React from 'react';
import '../styles/FooterStyle.css';
import { Link } from 'react-router-dom';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info-left">
        <Link to ='/about' activeStyle>
          About Us
        </Link>
        </section>
        <section className="footer-info-center">
        <Link to ='/' activeStyle>
          Home
        </Link>
        </section>
        <section className="footer-info-right">
        <Link to ='/contact-us' activeStyle>
          Contact Us
        </Link>
        </section>
      </section>
      <section className="footer-bottom">
      <small>QA Cinema - Copyright &copy; 2022</small>
      </section>
      <hr className="footer-seperator" />
    </section>
  )
}

export default Footer;