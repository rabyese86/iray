import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="#">Rabbi clothes Collection </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Product">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact" >Contact</NavLink>
        </li>
      </ul>
        <button className='btn'> <NavLink to="/Login" className='btn btn-outline-light'> <i className="fa fa-sign-in" aria-hidden="true"> </i> Login </NavLink> 
         <NavLink to="/Register" className='btn btn-outline-light ms-2'> <i className="fa fa-user-plus" aria-hidden="true"> </i> 
           register </NavLink> 
          <NavLink to="/Cart" className='btn btn-outline-light ms-2'> <i className="fa fa-shopping-cart" aria-hidden="true"> </i>
            Cart(0) </NavLink></button>
    </div>
  </div> 
</nav>


    </div>
  )
}

export default Navbar