import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
} from '@arithaconsulting/apf_component_library';
import './topnav.css';
import userImage from '../../assets/images/man.png';

export const TopNav = () => (
  <Navbar color="white" expand="md" light className="sticky-top">
    <NavbarToggler onClick={function noRefCheck() {}} />
    <Collapse navbar>
      <Nav className="me-auto" navbar>
        <NavItem>{/* <NavLink href=" ">DashBoard</NavLink> */}</NavItem>
      </Nav>

      <div className="topnav__right-user__image">
        <img src={userImage} alt="user" />
      </div>
    </Collapse>
  </Navbar>
);

export default TopNav;
