import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import ErrorPage from './Components/Error'
import Student from './Components/Student'
import JEE from './Components/ChildComponents/JEE'
import NEET from './Components/ChildComponents/NEET'
import './App.css'

function App() {
  return (
    // <React.Fragment>
    //   <Home />
    //   <br />
    //   <About />
    //   <br />
    //   <Contact />
    //   <br />
    //   <Galary />
    // </React.Fragment>


    //! in webbrowser 'http://localhost:3000' and 'http://localhost:3000/' both are same

    //baseUrl : http://localhost:3000     path= /             Component: home
    //baseUrl : http://localhost:3000     path= /home         Component: home
    //baseUrl : http://localhost:3000     path= /about        Component: about
    //baseUrl : http://localhost:3000     path= /contact      Component: contact
    //baseUrl : http://localhost:3000     path= /gallary      Component: gallary


    //! Basic Router
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/gallary' element={<Gallary />} />
    //     <Route path='*' element={<ErrorPage />} />
    //   </Routes>
    // </BrowserRouter>

    //! Menu Base Router

    //! in react router for a single PATH('/') parent and child both can render
    <BrowserRouter>
      <Routes>
        {/* parent router start */}
        <Route path='/' element={<Layout />}>
          {/* child router start */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          {/* <Route path='/student' element={<Student />} /> */}

          <Route path='/student' element={<Student />}>

            <Route index element={<JEE />} />

            <Route path='jee' element={<JEE />} />
            <Route path='neet' element={<NEET />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
          {/* child router end */}
        </Route>
        {/* parent router end */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;