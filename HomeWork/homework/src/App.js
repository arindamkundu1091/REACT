import React, { useState} from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './components/FixedComponents/Navbar';
import Footer from './components/FixedComponents/Footer';
import About from './components/About/About';
import SignUp from './components/UserValidation/SignUp';


function App() {

  let bg_mode = localStorage.getItem("bg_mode");
  const[mode, setMode] = useState(bg_mode===null?"light":bg_mode);

    function ModeChange() {
      if(mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
      }
    }

    localStorage.removeItem("bg_mode");
    localStorage.setItem("bg_mode", mode);
    document.body.style.backgroundColor = bg_mode==="dark"?"#222":"white";

    

  return (
    <React.Fragment>
      <Navbar mode={mode} ModeChange={ModeChange}/>
      <Routes>
        <Route exact path="home" element={<Home mode={mode}/>}/>
        <Route exact path="about" element={<About mode={mode}/>}/>
        <Route exact path="signup" element={<SignUp mode={mode}/>}/>
      </Routes>
      <Footer mode={mode}/>
      
    </React.Fragment>
  );
}

export default App;
