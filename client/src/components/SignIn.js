import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import img from '../components/Linkedin.png'
import AuthContext from '../context/AuthContext'
import { login } from '../features/userSlice'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { getLoggedIn } = useContext(AuthContext);
  const dispatch = useDispatch()
  
    // const { getLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate()
  
    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        const signInData = {
        email, 
        password,
        }
      const response = await axios.post("http://localhost:5000/auth/login", signInData ,{
        withCredentials: true
       })
       console.log(response.data);
       localStorage.setItem('email', response.data.email);
       localStorage.setItem('name', response.data.name);
       localStorage.setItem('photourl', response.data.photourl);

       dispatch(login({
        email: response.data.email,
        name: response.data.name,
        photourl: response.data.photourl
       }))
       await getLoggedIn();
       navigate('/home')
       
      } catch (error) {
        console.log(error);
        alert("Password or email is wrong")
      }
    } 
    
    return (
      <div className='loginPage'>
        <img src={img} alt="" />
        <form>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' required />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' required />
          <button onClick={handleSignIn} type="submit" className='loginPage_submit'>Login</button>

        </form>
      </div>
    )
  }
  

export default SignIn