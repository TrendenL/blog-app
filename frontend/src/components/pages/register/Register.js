import React, { useState, useContext } from 'react'
import { UserContext } from '../../../context/UserProvider'
import { Link } from 'react-router-dom'
import '../register/register.css'

export default function Register() {
    const initInputs = { username: "", email: "", password: ""}

    const [ inputs, setInputs ] = useState(initInputs)

    const { signup } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm' onSubmit={handleSignup}>
                <label>Username</label>
                <input type='text' name='username' value={inputs.username} onChange={handleChange} className='registerInput' placeholder='Enter your username...'></input>
                <label>Email</label>
                <input type='text' name='email' value={inputs.email} onChange={handleChange} className='registerInput' placeholder='Enter your email...'></input>
                <label>Password</label>
                <input type='text' name='password' value={inputs.password} onChange={handleChange} className='registerInput' placeholder='Enter your password...'></input>
                <button className='registerBtn'>Register</button>
                <p style={ {textAlign: "center", paddingTop: "15px"} }>or</p>
                <Link to="/Login">
                    <button className='registerLoginBtn'>Login</button>
                </Link>
            </form>
        </div>
    )
}
