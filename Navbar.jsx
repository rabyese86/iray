import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" to="#">Rabbi clothes Collection </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Product">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact" >Contact</a>
        </li>
      </ul>
        <button className='btn'> <a href="" className='btn btn-outline-light'> <i className="fa fa-sign-in" aria-hidden="true"> </i> Login </a> 
         <a to="" className='btn btn-outline-light ms-2'> <i className="fa fa-user-plus" aria-hidden="true"> </i> 
           Register </a> 
          <a href="" className='btn btn-outline-light ms-2'> <i className="fa fa-shopping-cart" aria-hidden="true"> </i>
            Cart(0) </a></button>
    </div>
  </div> 
</nav>


    </div>
  )
}

export default Navbar