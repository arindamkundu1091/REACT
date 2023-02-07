import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href='/'>Features</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <div className="form-check form-switch">
                        <input className="form-check-input my-2" type="checkbox" role="switch" onClick={props.ModeChange} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label my-1 text-${props.mode === "light"? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "Dark" : "Light"} Mode</label>
                    </div>
                    <button className="btn btn-outline-success mx-1" type="submit">Sign up</button>
                    <button className="btn btn-outline-success mx-1" type="submit">Log in</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar