import React from 'react'
import './listing.css'

import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import img from '../../../Assets/img3.png';
import img4 from '../../../Assets/img4.png';
import img5 from '../../../Assets/img5.png';
import img6 from '../../../Assets/img6.png';
import user3 from '../../../Assets/user3.png';
import user2 from '../../../Assets/user2.png';
import user4 from '../../../Assets/user4.png';
import user5 from '../../../Assets/user5.png';

const Listing = () => {
  return (
    <div className='listingSection'>


      <div className='heading fledx'>
        <h1> My Listing</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>


      <div className='secContainer flex'>

        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className='singleItem'>
          <AiOutlineHeart className='icon' />
          <img src={img4} alt="Image Name" />
          <h3>Fern Arum</h3>
        </div>

        <div className='singleItem'>
          <AiOutlineHeart className='icon' />
          <img src={img5} alt="Image Name" />
          <h3>Parlor Palm</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={img6} alt="Image Name" />
          <h3>Corn Plant</h3>
        </div>

      </div>

      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3> Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img className='listImage' src={user3} alt='User Image' />
              <img className='listImage' src={user2} alt='User Image' />
              <img className='listImage' src={user4} alt='User Image' />
              <img className='listImage' src={user5} alt='User Image' />
            </div>

            <div className='cardText'>
              <span>
                14.556 Plant sold <br/>
                <small>
                  21 Sellers <span className='date'>
                    7 Days
                  </span>
                </small>
              </span>
            </div>
          </div>

        </div>


        <div className='featuredSellers'>
          <div className='heading flex'>
            <h3> Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img className='listImage' src={user3} alt='User Image' />
              <img className='listImage' src={user4} alt='User Image' />
              <img className='listImage' src={user5} alt='User Image' />
              <img className='listImage' src={user2} alt='User Image' />
            </div>

            <div className='cardText'>
              <span>
                28,556 Plant sold <br/>
                <small>
                  26 Sellers <span className='date'> 31 Days
                  </span>
                </small>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Listing