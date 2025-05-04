import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' 
import arrow from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Converter</li>
            <li>News</li>
        </ul>
        <div className='nav-right'>
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        <button>Sign up <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar