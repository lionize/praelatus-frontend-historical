import React from 'react'
import './Header.css'

const Header = () => (
  <nav className="nav-main navbar navbar-light bg-faded">
    <a className="navbar-brand" href="#">
      <img src="assets/images/praelatus.png" width="30" height="30" alt="" />
      Praelatus
    </a>
    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
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
  </nav>
)

export default Header
