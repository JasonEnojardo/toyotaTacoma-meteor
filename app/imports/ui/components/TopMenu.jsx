import React from 'react';
import { Container, Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/bs';

const TopMenu = () => (
  <Navbar expand="lg">
    <Container className="pl-0">
      <Navbar.Brand href="#">
        <Image src="/images/toyotaTopLeftLogo.png" width="200" />
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Item className="nav-link dropdown dropdown-toggle text-black me-3">Vehicles</Nav.Item>
        <Nav.Item className="nav-link dropdown dropdown-toggle text-black me-3">Shopping Tools</Nav.Item>
        <Nav.Item className="nav-link dropdown dropdown-toggle text-black me-3">Owners</Nav.Item>
        <Nav.Item className="nav-link dropdown text-black me-3">Search Inventory</Nav.Item>
        <Dropdown align="end">
          <Dropdown.Toggle id="navbarDropdown" as="div" bsPrefix="custom-dropdown">
            <Nav.Link href="#" className="text-black pe-0">
              <BsPersonCircle size={32}/>
            </Nav.Link>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>My Toyota</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Container>
  </Navbar>
);


export default TopMenu;