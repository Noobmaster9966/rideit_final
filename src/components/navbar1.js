import React from 'react'

export default function Navbar1() {
  return (
    <div className='nav justify-content-end bg-dark d-flex flex-row-reverse ' style={{width:"100vw"}}>
      <nav className="navbar navbar-expand-lg  navbar-dark ">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/"> */}
      {/* <img src="minorlogo.png" alt="" /> */}
      {/* </a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  p-2">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="/pw">Partner with RIDEIT</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link " href="/">Sign up</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="/future">Future</a>
        </li>
        {/* <li className="nav-item dropdown"> */}
          {/* <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
            {/* Dropdown */}
          {/* </a> */}
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        {/* </li> */}
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link disabled" href='/' >Disabled</a> */}
        {/* </li> */}
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
