// import React, { useContext } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png' 
// import arrow from '../../assets/arrow_icon.png'
// import { CoinContext } from '../../context/CoinContext'
// import {Link} from 'react-router-dom'

// const Navbar = () => {

//     const {setCurrency} = useContext(CoinContext)

//     const currencyHandler=(e)=>{
//         switch (e.target.value){
//             case "usd":{
//                 setCurrency({name:"usd", symbol:"$"})
//             }
//             break;
//             case "eur":{
//                 setCurrency({name:"eur", symbol:"€"})
//             }
//             break;
//             case "inr":{
//                 setCurrency({name:"inr", symbol:"₹"})
//             }
//             break;
//             default: {
//                 setCurrency({name:"usd", symbol:"$"})
//             }
//             break;
//         }
//     }

//   return (
//     <div className='navbar'>
//         <Link to={'/'}>
//         <img src={logo} alt="" className='logo'/>
//         </Link>
//         <ul>
//             <Link to={'/'}><li>Home</li></Link>
//             <li>Portfolio</li>
//             <li>Converter</li>
//             <li>News</li>
//         </ul>
//         <div className='nav-right'>
//             <select onChange={currencyHandler}>
//                 <option value="usd">USD</option>
//                 <option value="eur">EUR</option>
//                 <option value="inr">INR</option>
//             </select>
//         <button>Sign up <img src={arrow} alt="" /></button>
//         </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="TrackrCoin Logo" className='logo' />
      </Link>

      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/portfolio'><li>Portfolio</li></Link>
        <Link to='/converter'><li>Converter</li></Link>
        <Link to='/news'><li>News</li></Link>
      </ul>

      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        {/* <button>Sign up <img src={arrow} alt="arrow icon" /></button> */}
      </div>
    </div>
  );
};

export default Navbar;
