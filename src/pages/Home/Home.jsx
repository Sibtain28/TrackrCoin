import React, { useContext, useEffect, useState } from 'react'
import './Home.css' 
import { CoinContext } from '../../context/CoinContext'
import {Link} from 'react-router-dom'

const Home = () => {

    const {allCoin,currency} =useContext(CoinContext); 
    const [displayCoin,setDisplayCoin]=useState([]);

    const [input,setInput]=useState("")
     
    const inputHandler=(e)=>{
        setInput(e.target.value)
        if(e.target.value === ""){
            setDisplayCoin(allCoin)
        }
    }
    const searchHandler=async(e)=>{
        e.preventDefault();
        const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins)
    }

    useEffect(()=>{
        setDisplayCoin(allCoin)
    },[allCoin])

  return (
    <div className='home'>
        <div className="hero">
            <h1>Your Smart Gateway <br /> to Crypto Insights</h1>
            <p>Explore market trends, price changes, and crypto updates in one view.</p>
            <form onSubmit={searchHandler}>
                <input list='coinlist' value={input} onChange={inputHandler} type="text" placeholder='Search crypto..' required/>
                
                <datalist id='coinlist'>
                {allCoin.map((item,index)=>(
                    <option key ={index} value={item.name}/>
                ))}
                </datalist> {/* suggestion dropdown ke liye */}

                <button type='submit'>Explore</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>Rank</p>
                <p>Crypto</p>
                <p>Live Price</p>
                <p style={{textAlign:"center"}}>% Change</p>
                <p className='market-cap'>Cap Size</p>
            </div>
            {
                displayCoin.slice(0,10).map((item,index)=>(
                    <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                        <p>{item.market_cap_rank}</p>

                        <div>
                           <img src={item.image} alt="" /> 
                           <p>{item.name + "-" + item.symbol}</p>
                        </div>

                        <p>{currency.symbol} {item.current_price.toLocaleString()}</p>

                        <p className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>

                        <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home