import React from "react";
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to = '/'>Search</Link> 
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">          
            <NavDropdown.Item>  
                <Link to ='/signup'>
                Sign Up</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>  
                <Link to ='/login'>
                Login</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
  </Navbar>
  )
};

export default Header;