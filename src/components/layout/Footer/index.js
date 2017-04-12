import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Footer = () => (
  <div className="footer">
    <Nav inline>
      <NavLink>Powered by Praelatus</NavLink>
      <NavLink>Terms of use</NavLink>
      <NavLink>Answers</NavLink>
      <NavLink>Maintenance schedule</NavLink>
    </Nav>
  </div>
);

export default Footer;
