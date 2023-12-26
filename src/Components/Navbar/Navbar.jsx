import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../images/logo.png'

import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>book</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            {/* <HiOutlineMenuAlt3 size = {35} style = {{
            color: `${toggleMenu ? "#fff" : "#010101"}`
          }} /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              style={{ color: toggleMenu ? "#fff" : "#010101" }}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                fill={toggleMenu ? "#fff" : "#010101"}
                d="M19 13H5v-2h14v2zm0-5H5V6h14v2zm0-7H5v2h14V1z"
              />
            </svg>
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar