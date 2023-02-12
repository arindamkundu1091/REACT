import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='row col-sm-4'>
                <div className='col col-3'>
                    <Link className='btn btn-outline-primary' role='button' to="/">Home</Link>
                </div>
                <div className='col col-3'>
                    <Link className='btn btn-outline-primary' role='button' to="/about">About</Link>
                </div>
                <div className='col col-3'>
                    <Link className='btn btn-outline-primary' role='button' to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}
