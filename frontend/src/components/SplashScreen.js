import React from 'react'
import './styles/splashStyle.css'

const SplashScreen = () => {
  return (
    <div className='main'>
        <div className='overlay'>
            <div className='content-container'>
                 <span>Welcome to<br/><b>Online Job Portal</b></span>
                 <div className='main-input-box'>
                    <i className='fa fa-search'></i>
                    <input type='text' placeholder='Search Your Desired Company' />
                 </div>
            </div>
        </div>
    </div>
    
  )
}

export default SplashScreen
