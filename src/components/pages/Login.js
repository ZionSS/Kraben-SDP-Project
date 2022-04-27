import React, { useState } from 'react'
import '../styles/Login.css'
import bg from '../../images/BG.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/profile')
            console.log('You are logged in')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    return (
        <div className='loginBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br />
                Login
                <br />
            </h1>
            <div className="mt-5 mx-auto p-3" style={{ background: "#cee", width: 700 }}>
                <form onSubmit={handleSubmit} class="row g-3">
                    <div class="col-12">
                        <label for="inputUsername" class="form-label">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" id="inputUsername" />
                    </div>
                    <div class="col-12">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='signup'>
                    <div>Don't have account? <Link to ="../register">Sign Up</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Login