import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' 
import arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler=(e)=>{
        switch (e.target.value){
            case "usd":{
                setCurrency({name:"usd", symbol:"$"})
            }
            break;
            case "eur":{
                setCurrency({name:"eur", symbol:"€"})
            }
            break;
            case "inr":{
                setCurrency({name:"inr", symbol:"₹"})
            }
            break;
            default: {
                setCurrency({name:"usd", symbol:"$"})
            }
            break;
        }
    }

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
            <select onChange={currencyHandler}>
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