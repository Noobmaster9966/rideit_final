import React from 'react'
// import { useState } from 'react'
// import Maps from './maps';
export default function Navbar() {
  

  
  return (
    <div className='nav justify-content-end' style={{width:"100vw"}} >
    <nav className="navbar navbar-expand-lg bg-warning navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="minorlogo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item p-2"style={{fontFamily:"Baloo Bhai 2",fontWeight:'bold'}}>
          <a className="nav-link active" aria-current="page" href="/home">Book a Ride</a>
        </li>
        <li className="nav-item p-2" style={{fontFamily:"Baloo Bhai 2",fontWeight:'bold'}} >
          <a className="nav-link" href="#">RIDEIT PRO</a>
        </li>
        <li className="nav-item p-2"style={{fontFamily:"Baloo Bhai 2",fontWeight:'bold'}}>
          <a className="nav-link" href="/aboutus">
            About Us
          </a>
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href='/' >Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}
