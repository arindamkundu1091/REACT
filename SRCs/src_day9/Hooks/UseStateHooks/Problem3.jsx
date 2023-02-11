import React, { useState } from 'react';

function Problam3(props) {
    const user = {
        username: '',
        password: ''
    };
    const [Data, setData] = useState(user);
    const [form, setForm] = useState(user);
    const [submit, setSubmit] = useState(false);
    //console.log(Data.username)
    const UpdateFiled = (e) => {
        //console.log('Name:',e.target.name)
        //console.log('Value:',e.target.value)
        setData({
            ...Data, [e.target.name]: e.target.value
        });
    }
    const PrintValue = (e) => {
        e.preventDefault();
        setForm({
            username: Data.username,
            password: Data.password
        });
        setSubmit(true);
    }

    return (
        <div>
            <form onSubmit={PrintValue}>
                <label>UserName:
                    <input
                        type='text'
                        value={Data.username}
                        name="username"
                        onChange={UpdateFiled}
                    /></label>
                <br />
                <label>Password:
                    <input
                        type='password'
                        value={Data.password}
                        name="password"
                        autoComplete='true'
                        onChange={UpdateFiled}
                    /></label>
                <br />
                <button>Submit</button>
            </form>
            <br/>
            <p>{submit?form.username:null}</p>
            <p>{submit?form.password:null}</p>
        </div>
    );
}

export default Problam3;