import React from 'react'
import { Link } from 'react-router'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import './Header.css'

const Header = () => (
  <Navbar color="faded" className="nav-main" light>
    <NavbarBrand href="/">
      <img src="assets/images/praelatus.png" width="30" height="30" alt="" />
      Praelatus
    </NavbarBrand>

    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link">Projects</Link>
      </li>
      <li className="nav-item">
        <Link to="/tickets" className="nav-link">Tickets</Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">Users</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="http://example.com" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="supportedContentDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form className="form-inline float-xs-right">
      <input className="form-control" type="text" placeholder="Search" />
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </Navbar>
)

export default Header
