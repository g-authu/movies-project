import React from 'react'
import './Header.css'
import { Link  } from 'react-router-dom'
import 'animate.css';

function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
         <Link to='/'><span className='"animate__animate__lightSpeedInRight"'> <img className='header_icon' src='https://cdn.wccftech.com/wp-content/uploads/2015/03/mortal-kombat.jpeg' /></span></Link>&nbsp;&nbsp;&nbsp;
           <button className='btn'><Link to='/movies/popular' style={{textDecoration: "none"}}><span className='color "animate__animate__lightSpeedInRight"'>Popular</span></Link></button> 
           <button className='btn'> <Link to='/movies/top_rated' style={{textDecoration: "none"}}><span className='color'>Top Rated</span></Link></button>
           <button className='btn'><Link to='/movies/upcoming' style={{textDecoration: "none"}}><span className='color'>Upcoming</span></Link></button> 


        </div>
    </div>
  )
}

export default Header