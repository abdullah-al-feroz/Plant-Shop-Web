import React from 'react'
import './Activity.css'

import { BsArrowRightShort } from 'react-icons/bs'
import user from '../../../Assets/user3.png'
import user2 from '../../../Assets/user2.png'
import user4 from '../../../Assets/user4.png'
import user5 from '../../../Assets/user5.png'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className='secContainer grid'>
        <div className='singleCustomer flex'>
          <img className='activityImage' src={user} alt='Customer Image' />

          <div className='customerDetails'>
            <span className='name'>Ola Martha </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className='singleCustomer flex'>
          <img className='activityImage' src={user2} alt='Customer Image' />

          <div className='customerDetails'>
            <span className='name'>Ola Martha </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className='singleCustomer flex'>
          <img className='activityImage' src={user4} alt='Customer Image' />

          <div className='customerDetails'>
            <span className='name'>Ola Martha </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className='singleCustomer flex'>
          <img className='activityImage' src={user5} alt='Customer Image' />

          <div className='customerDetails'>
            <span className='name'>Ola Martha </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className='singleCustomer flex'>
          <img className='activityImage' src={user} alt='Customer Image' />

          <div className='customerDetails'>
            <span className='name'>Ola Martha </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity