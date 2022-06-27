import React from 'react';

// Import Image
import LogoImage from '../../assets/images/crm-logo.png';
// End Import Image
// Import Bootstrap
import {Navbar, Nav} from 'react-bootstrap';
// End import bootstrap
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate('/');
  };
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className="px-3">
        <Navbar.Brand>
            <img src={LogoImage} alt="Logo image" width="50px" className="logo-image"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <LinkContainer to='/dashboard'>
                  <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/tickets'>
                  <Nav.Link>Tickets</Nav.Link>
                </LinkContainer>
                  <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
};

export default HeaderComponent;