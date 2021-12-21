import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./Header.css";
import { Link } from 'react-router-dom';
import { GiMagnifyingGlass } from 'react-icons/gi';
import {MdDarkMode} from "react-icons/md";

const Header = ({ title, darkMode, setDarkMode, handleDarkMode}) => {

  const myStyle = {
    transition : 'all 0.3s ease',
    color: `${darkMode ? 'white' : 'rgb(0, 132, 255)'}`,
    textDecoration: 'none',
    
  }

  return (
    <Navbar className="navbar" bg={`${darkMode ? 'dark' : 'light'}`
} variant="light">
    <Container>
          <Link style={myStyle} to="/" className="brand"><span><GiMagnifyingGlass /></span>{title}</Link>
    <Nav className="me-auto">
      <Link style={myStyle} to="/about" className="link">About</Link>
          </Nav>
          <MdDarkMode style={{ color : `${darkMode ? 'white': 'rgb(0, 132, 255)'}`, transition: 'all 0.3s ease'}} onClick={handleDarkMode}  className="iconButton" />
        </Container>
        
  </Navbar>
    )
}

export default Header;
