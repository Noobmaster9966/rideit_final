// import logo from './logo.svg';
import './App.css';
import FormText from './components/formtext';
import { useState } from 'react';
// import Maps from './components/maps';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Navbar from './components/navbar';
import Navbar1 from './components/navbar1';
// import { useJsApiLoader } from '@react-google-maps/api';
// import Signup from './components/signup';
import Partwith from './components/partwith';
import Fleets from './components/fleets'
import "@fontsource/baloo-bhai-2";
// import Mmaps from './components/map'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/loginform';
import About from './components/about';
import Future from './components/future';
// import Maps from './components/maps';
import LoginPage2 from './components/loginform2';

function App() {
  const[user,setLoginUser]=useState({})
  return (
    //  <>
    //  <Router>
    //  {/* <div className="navbar11"><Navbar1/></div> 
    //    <div className="navbar"><Navbar /></div> */}
       
    //  {/* <div className="maps"></div>   */}
     
    //  <Routes>
    //   <Route  exact path= '/pw' element= { [ <div className="navbar11"><Navbar1/></div>, 
    //    <div className="navbar"><Navbar /></div>, <div className="partwith"> <Partwith/> </div> ] }  > </Route>
    //   <Route exact path='/home' element={[<div className="navbar11"><Navbar1/></div>, 
    //    <div className="navbar"><Navbar /></div>,<div className="formtext maps"  ><FormText/> <Fleets/> </div>  ]}></Route>
  
    //  <Route exact path='/' element= {[<div className="navbar11"><Navbar1/></div>, 
    //    <div className="navbar"><Navbar /></div>, <LoginPage/>]} ></Route>
    //  <Route exact path='/signin' element= {[<div className="navbar11"><Navbar1/></div>, 
    //    <div className="navbar"><Navbar /></div>, <LoginPage2/>]} ></Route>
     
     
    //  <Route exact path='/aboutus' element={[<div className="navbar11"><Navbar1/></div>, 
    //    <div className="navbar"><Navbar /></div>,<About/>]} >  </Route>
    //  {/* <Route exact path='/maps' element= {<Mmaps/>}> </Route> */}

    //  <Route exact path='/future' element={[<div className="navbar11"><Navbar1/></div>, 
    //    <div className="navbar"><Navbar /></div>,<Future/>]} > </Route>


    //   </Routes>
  
    
    // </Router>
    // </>

    <>
    <Router>
    <div className="navbar11"><Navbar1/></div> 
      <div className="navbar"><Navbar /></div>
      
    {/* <div className="maps"></div>   */}
    
    <Routes>
     <Route  exact path= '/pw' element= { <div className="partwith"> <Partwith/> </div>}  > </Route>
     <Route exact path='/' element={
     
      <div id="log"> <Login  setLoginUser={setLoginUser} />  </div>
     
     }>
     </Route>
     <Route exact path='/home' element={<div className="formtext maps"><FormText/> <Fleets/></div>}></Route>
 
    <Route exact path='/login' element= { <div id="log"   > <Login setLoginUser={setLoginUser} /></div>} ></Route>
    <Route exact path="/register" element={  <div id="reg" >
            <Register /></div>}>
          </Route>
    <Route exact path='/aboutus' element={<About/>} >  </Route>
    {/* <Route exact path='/maps' element= {<Mmaps/>}> </Route> */}

    <Route exact path='/future' element={<Future/>} > </Route>


     </Routes>
 
   
   </Router>
   </>
  );
  
}

export default App;
