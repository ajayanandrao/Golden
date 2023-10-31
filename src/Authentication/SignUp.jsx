import React, { useState } from 'react'
import "./SignUp.scss";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const SignUp = () => {

    }

    return (
        <div className='signup-main-container'>
            <div className="form-div">
                <h1>SignUp</h1>
                <input type="text" placeholder='Full Name' className='input' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Email' className='input' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Password' className='input' onChange={(e) => setPassword(e.target.value)} />
                <button className='btn btn-success my-2' >Sign UP</button>
                <Link to={"/login/"} className='link'>
                    <button className='btn btn-primary w-25 mt-3'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default SignUp