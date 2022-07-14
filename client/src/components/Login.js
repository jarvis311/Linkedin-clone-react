import React, { useContext, useState } from 'react'
import '../styles/login.css'
import img from '../components/Linkedin.png'



import axios from 'axios'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const Login = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [photourl, setPhotourl] = useState('')


  const { getLoggedIn } = useContext(AuthContext);


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const signupData = {
        name,
        email,
        password,
        photourl,
      }
      await axios.post("http://localhost:5000/auth/", signupData, {
        withCredentials: true
      })

      await getLoggedIn();

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='loginPage'>
      <img src={img} alt="" />
      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name' required />
        <input value={photourl} onChange={e => setPhotourl(e.target.value)} type="text" placeholder='Profile Pic' />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' required />
        {/* <button onClick={handleLogin} type="submit" className='loginPage_submit'>Login</button> */}
        <p className='loginPage_register'>Not a member? </p>
        <button type='submit' className='loginPage_submit' onClick={handleRegister}>Register Now</button>

        <Link to='/signin'>Login Plsease</Link>
      </form>
    </div>
  )
}

export default Login