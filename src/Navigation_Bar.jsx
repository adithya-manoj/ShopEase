import React from 'react';
import './Navigation_Bar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const Navigation_Bar = () => {
  return (
    <>
    <Navbar className="custom-navbar">
      <Container>

        <NavDropdown title="Shops" id="basic-nav-dropdown">
          <div className='m-1'>LifeStyle</div>
          <div className='m-1'>Reliance</div>
        </NavDropdown>

        <Navbar.Brand className="navbar-title">ShopEase</Navbar.Brand>

        <Nav className="ml-auto">

          <Nav.Link href="#"><FaSearch /></Nav.Link>
          <Nav.Link>
            <Link to='/Login'><MdAccountCircle /></Link>
            </Nav.Link>
          <Nav.Link href="#"><FaCartShopping /></Nav.Link>
          

        </Nav>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default Navigation_Bar;
