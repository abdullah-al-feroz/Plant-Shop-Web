import React from 'react'
import './Login.css'
import video from '../../Assets/video.mp4'
import { Link, Navigate } from 'react-router-dom'
import logo from '../../Login Assets/leaf.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {

  return (
    <div className='loginPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video className='video' src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>Create And Sell Extraordinary Products</h2>
            <p className='p'>Adopt the peace of nature!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img className='lImage' src={logo} alt='Logo Image' />
            <h3>Welcome Back!</h3>
          </div>

          <form action='' className='form grid'>
            <span className='showMessage'>Login Status will go here</span>

            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input style={{width: '100%'}}  type='text' id='username' placeholder='Enter Username' />
              </div>
            </div>


            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input style={{width: '100%'}} type='password' id='password' placeholder='Enter Password' />
              </div>
            </div>

            <Link to='/dashboard'>
            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>
            </Link>

            <span className='forgotPassword'>
              Forgot your password? <a href=''>Click Here</a>
            </span>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login