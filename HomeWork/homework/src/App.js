import React, {useState} from 'react';
import Home from './components/Home/Home';
import Navbar from './components/FixedComponents/Navbar';
import Footer from './components/FixedComponents/Footer';


function App() {

  const[mode, setMode] = useState("light");

    function ModeChange() {
        if(mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = '#222';
        } else {
            setMode("light");
            document.body.style.backgroundColor = 'white';
        }
    }

  return (
    <>
      <Navbar mode={mode} ModeChange={ModeChange}/>
      <Home mode={mode}/>
      <Footer mode={mode}/>
    </>
  );
}

export default App;
