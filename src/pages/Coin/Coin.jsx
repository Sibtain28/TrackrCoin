import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom' //coin id dhundne ke liye url se
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {

  const {coinId} = useParams();
  const [coinData,setCoinData]=useState() // ye hai coin details
  const [historicalData,setHistoricalData]=useState() //ye coin chart
  const {currency} = useContext(CoinContext)
 
  const fetchCoinData = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-dFGmU3bMRwyGnUvyWRg2FMuq'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  }

  const fetchHistoricalData = async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-dFGmU3bMRwyGnUvyWRg2FMuq'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchCoinData();
    fetchHistoricalData();
  },[currency])

  if(coinData && historicalData){
    return (
      <div className='coin'>
          <div className="coin-name">
            <img src={coinData.image.large} alt="" />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
          </div>
          <div className="coin-chart">
            <LineChart historicalData={historicalData}/>
          </div>

      <div className="coin-info">
        <ul>
          <li>Cypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>

        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>

        <ul>
          <li>Market cap</li>
          <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
        </ul>

        <ul>
          <li>24 Hour High</li>
          <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
        </ul>

        <ul>
          <li>24 Hour Low</li>
          <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
        </ul>
      </div>

      </div>
    )
  }
  else{
    return (
      <div className='loader'>
          <div className="spin"></div>
      </div>
    )
  }
  }
  

export default Coin