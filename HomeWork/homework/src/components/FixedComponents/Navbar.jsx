import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {

    // function addButton() {
    //     const userData = localStorage.getItem('userData');
    //     const navForm = document.getElementById('navForm');
    //     if(userData === null) {
    //         navForm.innerHTML = `<div><button className="btn btn-outline-success mx-1" type="submit">Sign up</button>
    //                             <a className="btn btn-outline-success mx-1" role="button" type="submit">Log in</a></div>`;
    //     } else {
    //         navForm.innerHTML = `<button className="btn btn-outline-success mx-1" type="submit">Profile</button>`;
    //     }
    // }
    
    // useEffect(addButton,[]);

    return (
        <React.Fragment>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="home">PageTitle</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled" to='/'>Features</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <div className="form-check form-switch">
                        <input className="form-check-input my-2" type="checkbox" role="switch" onClick={props.ModeChange} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label my-1 text-${props.mode === "light"? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "Dark" : "Light"} Mode</label>
                    </div>
                    <div id='navForm'>
                        <Link className="btn btn-outline-success mx-1" role='button' to='signup'>Sign up</Link>
                        <a className="btn btn-outline-success mx-1" role='button' href='/'>Log in</a>
                    </div>
                </form>
                </div>
            </div>
            </nav>
            
        </React.Fragment>
    )
}

export default Navbar