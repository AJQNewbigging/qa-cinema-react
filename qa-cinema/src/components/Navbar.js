import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';
import {NavLink as Link} from 'react-dom'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../styles/Navbar.style';

function Navbar() {
  return (
    <>
    <Nav>
      <NavLink to='/'>
  
     </NavLink>
      <Bars />
      <NavMenu>
      <NavLink to='/' activeStyle>
          Home
        </NavLink>

        <NavLink to='/About' activeStyle>
          About
        </NavLink>
        <NavLink to='/listings' activeStyle>
          Listings
        </NavLink>
        <NavLink to ='/contact-us' activeStyle>
          Contact Us
        </NavLink>
       <NavLink to='/Book-now' activeStyle>
          Book Now
        </NavLink>
        <NavLink to='/Location' activeStyle>
          Location
        </NavLink>
    
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/Search'>Search</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);
};










export default Navbar