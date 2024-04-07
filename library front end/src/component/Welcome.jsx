import React from 'react'
import NewLogin from './NewLogin'
// import Banner from '../image/welcome banner.png'
import bannerImage from '../image/welcome banner.png'
import {Link} from "react-router-dom"

const Welcome = () => {
  return (
      <div className='welcome_container'>
          <div className='banner'>
              <h2>Welcome to <br/> <span id='lib_name'>"Apna Library"</span></h2>
              <div className='banner_image'>
              <img src={bannerImage} alt="" />
             
              </div>
          </div>
          <div className='Loginform'>
              <NewLogin/>
          </div>
          
      </div>
  )
}

export default Welcome