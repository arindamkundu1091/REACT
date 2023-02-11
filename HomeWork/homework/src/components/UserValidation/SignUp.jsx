import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp(props) {
    return (
        <div className='container'>
            <div className="card">
                    <div className="card-body" style={{backgroundColor: props.mode === "light" ? "white" : "#333", color: props.mode === "light" ? "black" : "white"}}>
                        <form className="d-flex" >
                            <div className='row mb-3' >
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='First Name' id='firstname' style={{width: "400px"}}/>
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='Last Name' id='Lastname'  style={{width: "400px"}}/>
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='Email Id' id='email' style={{width: "400px"}}/>
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='Mobile No.' id='mobile'  style={{width: "400px"}}/>
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='Password' id='pass' style={{width: "400px"}}/>
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='Confirm Password' id='conpass'  style={{width: "400px"}}/>
                                </div>
                            </div>
                        </form>
                        <div>
                        <button className='btn btn-primary mx-1'value="submit">Submit</button>
                        <Link className='btn btn-primary mx-1'role='button' to='home'>Cancel</Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}
