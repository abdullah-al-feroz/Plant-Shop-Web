import React from 'react'
import './Register.css'
import video from '../../Assets/video.mp4'
import { Link } from 'react-router-dom'
import logo from '../../Login Assets/leaf.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'

const Register = () => {
  return (
    <div className='registerPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video className='video' src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>Create And Sell Extraordinary Products</h2>
            <p className='p'>Adopt the peace of nature!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Have an account?</span>
            <Link to={'/'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img className='lImage' src={logo} alt='Logo Image' />
            <h3>Let Us Know You</h3>
          </div>

          <form action='' className='form grid'>
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                <MdMarkEmailRead className='icon' />
                <input style={{width: '100%'}}  type='email' id='email' placeholder='Enter email' />
              </div>
            </div>


            <div className='inputDiv'>
              <label htmlFor='userName'>Username</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input style={{width: '100%'}} type='text' id='userName' placeholder='Enter UserName' />
              </div>
            </div>


            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input style={{width: '100%'}} type='password' id='password' placeholder='Enter Password' />
              </div>
            </div>

            <Link to = '/'>
            <button type='submit' className='btn flex'>
              <span>Register</span>
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

export default Register;