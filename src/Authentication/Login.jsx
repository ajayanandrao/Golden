import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai"

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login = () => {

    }
    return (
        <div className='signup-main-container'>
            <div className="form-div">
                <h1>Log in</h1>
                <input type="text" placeholder='Email' className='input' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Password' className='input' onChange={(e) => setPassword(e.target.value)} />
                <button className='btn btn-success my-2' >Login</button>
                <Link to={"/signup/"} className='link'>
                    <button className='btn btn-primary w-25 mt-3'>SignUp</button>
                </Link>
            </div>
        </div>
    )
}

export default Login