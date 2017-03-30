import React from 'react'
import { Link } from 'react-router'
import { Navbar, NavbarBrand } from 'reactstrap'
import { UserInfoBox } from 'components'

const Header = () => (
  <Navbar color="faded" className="nav-main" light>
    <NavbarBrand href="/">
      <img src="assets/images/praelatus.png" width="30" height="30" alt="" />
      Praelatus
    </NavbarBrand>

    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link">Projects</Link>
      </li>
      <li className="nav-item">
        <Link to="/tickets" className="nav-link">Tickets</Link>
      </li>
      <li className="nav-item">
        <Link to="/teams" className="nav-link">Teams</Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">Users</Link>
      </li>
    </ul>
    <div className="float-xs-right">
      <UserInfoBox />
    </div>
  </Navbar>
)

export default Header
