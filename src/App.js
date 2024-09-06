import React from "react";
import { useState } from 'react';
import Alert from './Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './App.css';
{/*import About from './Components/Aboutus';*/}


{/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/}

function App() {
  const[mode,setmode] = useState('light')
  let togglemode= ()=>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor = "black"
      showalert("Dark mode is enabled","Success")
    }
    else{
      setmode ('light')
      document.body.style.backgroundColor = "white"
      showalert("Light mode is enabled","Success")
      
    }
  }
  const[alert,setalert] = useState('null')
  const showalert = (message , type)=>{
    setalert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    },2000);
  }
 

  return (
   <>
    {/*<Router>*/}
        <Navbar title="Niggahon ma" AboutTitle="About nigga" mode={mode} togglemode={togglemode}  />
        <Alert alert={alert} />
        {/*<Routes>*/}
          {/*<Route path="/about" element={<About />} />*/}
          <TextForm mode={mode} showalert={showalert} />
        {/*</Routes>*/}
      {/*</Router>*/}
        
   </>
  );
}

export default App;
