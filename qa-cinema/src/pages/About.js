import React from 'react'
import '../styles/AboutStyle.css';
import Footer from '../components/Footer'

function About() {
  return (
    <div>
    <h1 className="h1">
      About Us</h1>
    <h3 className="h3">
      Founder and CEO 
    </h3>
    <p className="p">Shaun Donnelly</p>
    
      <img className="img" 
      src="https://files.schudio.com/archbishop-temple-school/imagecache/1600x900s/gallery/26219/ATS%202.JPG" alt="Free science lessons guy" ></img>
      <h2 className="h2">
        Who We Are</h2>
      <p className="p">
       If you want the best viewing experiance of any cinema world-wide you have come to the right place. We insure the best experience, no money back guarantee! </p>
      <h2 className="h2">
        Our Story</h2>
      <p className="p">
       We are a small group of somewhat compitant people who consist of Asher, Moheen, Jools, Junaid and James. We have come together to create a cinema site after the allmighty Morgan told us to and its also our passion </p>
      <h2 className="h2">
        Where to find us</h2>
        <a className="a"
        href="https://en-gb.facebook.com/" target="_blank">Facebook</a>
        <a className="a"
        href="https://www.instagram.com/" target="_blank">Instagram</a>
        <a className="a"
        href="https://twitter.com/?lang=en" target="_blank">Twitter</a>
    </div>
  
);
};

export default About