import React, {useState} from 'react';
import Home from './components/Home/Home';
import Navbar from './components/FixedComponents/Navbar';
import Footer from './components/FixedComponents/Footer';
// import About from './components/About/About';


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
    <>
      <Navbar mode={mode} ModeChange={ModeChange}/>
      <Home mode={mode}/>
      {/* <About mode={mode}/> */}
      <Footer mode={mode}/>
    </>
  );
}

export default App;
