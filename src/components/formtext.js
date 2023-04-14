import React, { useState } from 'react'

// import L from 'leaflet'

export default function FormText() {

    let [cloc,setcloc]=useState("Enter Current Location");
    let[dloc,setdloc]=useState("Enter Destination Location");
   
  return (
    
    <div className='ft' style={{height:'100vh',width:"100vw"}}>
       
        <h1 className='nav justify-content-center my-0 'style={{color:'white',fontFamily:"Baloo Bhai 2",paddingTop:"20px"}}>Book a City Taxi to your destination in town</h1>
        <div> ' </div>
        <div>  </div>
        <div> ' </div>
        <h2 className='nav justify-content-center'style={{color:'white',fontFamily:"Baloo Bhai 2"}}><em>Choose from a range of categories and prices</em></h2>
        <div className='border border-secondary my-3 rounded col-sm-3 mx-3' style={{marginTop:"200px"}} >
          <div style={{display:"flex",justifyContent:"center",fontFamily:"Baloo Bhai 2"}}> <h2  style={{fontWeight:"900"}}>RIDE IT</h2 > </div>
          <div style={{display:"flex",justifyContent:"center",boxSizing:"border-box",fontFamily:"Baloo Bhai 2"}} ><h4 style={{fontWeight:"700"}}>Your Everyday Travel Partner</h4></div>
      {/* <div className="mb-3 my-3 col-sm-10 mx-4">
  <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontWeight:'bold'}} >{cloc}</label>
  <textarea className="form-control" placeholder='PICK UP' style={{borderWidth:"3px",borderColor:'black'}} id="exampleFormControlTextarea1" rows='1'></textarea>
</div>
<div className="mb-3 my-3 col-sm-10 mx-4">
  <label htmlFor="exampleFormControlTextarea2"style={{fontWeight:'bold'}}  className="form-label">{dloc}</label>
  <textarea className="form-control" placeholder='DROP' style={{borderWidth:"3px",borderColor:'black'}} id="exampleFormControlTextarea2"rows='1'></textarea>
</div> */}
<div  >
<select className="form-select form-select-sm-1 mx-4 my-3"  aria-label="Default select example" style={{display:"flex",justifyContent:"center", borderColor:'black',boxSizing:"border-box",width:"300px"}} > When?
  <option selected>Now</option>
  <option value="1">Schedule for later</option>
  </select>
</div>
<div className=' mx-5 my-3' style={{display:"flex",justifyContent:"center"}}>
    <button type="button"  className='btn btn-dark'><a href=".\x.html" style={{textDecoration:'none',color:"white",display:"flex",justifyContent:"center"}} >Book a Cab</a></button>
</div>
</div>
{/* <section class="map-sec">
    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=48%NewDelhi%20,%20Delhi,%20india+(%20Supreme%20Court)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
</section> */}

{/* <div id="map"> </div> */}
{/* <script src="../src/components/map.js"></script>   */}
{/* <a href="http://192.168.29.249:5500/ReactJS/a_copy/src/components/x.html">link1</a> */}
{/* <a href="http://www.google.com">link1</a> */}
 {/* <button type="submit" id= "Searchcabs"></button>    */}
 <div id="makespace"></div>

</div> 
  )
}


