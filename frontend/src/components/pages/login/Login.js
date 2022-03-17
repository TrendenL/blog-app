import React, { useState, useContext } from 'react'
import { UserContext } from '../../../context/UserProvider'
import { Link } from 'react-router-dom'
import '../login/login.css'

export default function Login() {
    const initInputs = { username: "", password: ""}

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
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form className='loginForm' onSubmit={handleSignup}>
                <label>Usernmae</label>
                <input type='text' name='username' value={inputs.username} onChange={handleChange} className='loginInput' placeholder='Enter your email...'></input>
                <label>Password</label>
                <input type='text' name='password' value={inputs.password} onChange={handleChange} className='loginInput' placeholder='Enter your password...'></input>
                <button className='loginBtn'>Login</button>
                <p style={ {textAlign: "center", paddingTop: "15px"} }>or</p>
                <Link to='/Register'>
                    <button className='loginRegisterBtn'>Register</button>
                </Link>
            </form>
        </div>
    )
}
