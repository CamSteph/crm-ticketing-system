import React from 'react';

// Import Image
import LogoImage from '../../assets/images/crm-logo.png';
// End Import Image
// Import Bootstrap
import {Navbar, Nav} from 'react-bootstrap';
// End import bootstrap

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className="px-3">
        <Navbar.Brand>
            <img src={LogoImage} alt="Logo image" width="50px" className="logo-image"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/tickets">Tickets</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
};

export default HeaderComponent;