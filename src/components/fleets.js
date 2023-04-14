import React from 'react'

export default function Fleets() {
  return (
    <div >

      <div className="container ">
  <h1 className='nav justify-content-center' style={{fontWeight:'bold' , fontFamily:"Baloo Bhai 2"}}>Our Fleets</h1>
  <div className="row fleetss" >
    <div className="col-sm-2 " >
    <img className='auto' src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg" alt="" />
    <h2 className='autoText'><a href="#">Auto</a></h2>
    </div>
    <div className="col-sm-2">
      <img className='bike' src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg" alt="" />
      <h2 className='bikeText'><a href="#">Bike</a></h2>
    </div>

    <div className="col-sm-2">
      <img className='mini' src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg" alt="" />
      <h2 className='miniText'><a href="#">Mini</a></h2>
    </div>

    <div className="col-sm-2">
      <img className='primesedan' src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg" alt="" />
      <h2 className='primesedanText'><a href="#">Prime Sedan</a></h2>
    </div>

    <div className="col-sm-2">
      <img className='primesuv' src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg" alt="" />
      <h2 className='primesuvText'><a href="#">Prime SUV</a></h2>
    </div>

    <div className="col-sm-2">
      <img className='kaalipeeli' src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli-active.svg" alt="" />
      <h2 className='kaalipeeliText'><a href="#">Kaali Peeli</a></h2>
    </div>
  </div>
</div>
    </div>
  )
}
