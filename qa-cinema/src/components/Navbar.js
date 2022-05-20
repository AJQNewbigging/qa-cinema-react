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
      <NavLink to='/home' activeStyle>
          Home
        </NavLink>

        <NavLink to='/About' activeStyle>
          About
        </NavLink>
        <NavLink to='/movies' activeStyle>
          Movies
        </NavLink>
        <NavLink to='/contact-us' activeStyle>
          Contact Us
        </NavLink>
        <NavLink to='/listing' activeStyle>
          Listings
        </NavLink>
        <NavLink to='/Book' activeStyle>
          Book
        </NavLink>
    
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Search</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);
};










export default Navbar