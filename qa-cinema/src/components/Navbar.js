import React from 'react'
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
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to='/' activeStyle>
          Home
        </NavLink>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/listings' activeStyle>
          Listings
        </NavLink>
        <NavLink to ='/contact-us' activeStyle>
          Contact Us
        </NavLink>
        <NavLink to='/book' activeStyle>
          Book Now
        </NavLink>
        <NavLink to='/location' activeStyle>
          Location
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/search'>Search</NavBtnLink>
      </NavBtn>
    </Nav>
);
};










export default Navbar