import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><em>{props.title}</em></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className={`form-check form-switch mx-2 text-${props.mode === "light"? "dark" : "light"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "Dark" : "Light"} Mode</label>
                        </div>
                        {/* <input className="form-control me-2" type="search" placeholder="Search"       aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        aboutText: PropTypes.string.isRequired,
        homeText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Set Title here",
    aboutText: "About Text here",
    homeText: "Home Text here"
}
