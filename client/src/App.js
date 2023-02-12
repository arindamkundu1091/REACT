import React from 'react';
import {Routes, Route} from 'react-router';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='about' element={<About/>}/>
        <Route exact path='contact' element={<Contact/>}/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;