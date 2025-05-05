import React from 'react'
import './Home.css' 

const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <h1>Your Smart Gateway <br /> to Crypto Insights</h1>
            <p>Explore market trends, price changes, and crypto updates in one view.</p>
            <form>
                <input type="text" placeholder='Search crypto..'/>
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
        </div>
    </div>
  )
}

export default Home