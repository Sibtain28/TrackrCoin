import React, { useContext, useState, useEffect } from 'react';
import './Portfolio.css';
import { CoinContext } from '../../context/CoinContext';

const Portfolio = () => {
  const { allCoin: coins, currency } = useContext(CoinContext);

  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem('portfolio');
    return saved
      ? JSON.parse(saved)
      : [{ id: '', quantity: '', buyPrice: '' }];
  });

  useEffect(() => {
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  const handleChange = (index, field, value) => {
    const updated = [...portfolio];
    updated[index][field] = value;
    setPortfolio(updated);
  };

  const addNewEntry = () => {
    setPortfolio([
      ...portfolio,
      { id: '', quantity: '', buyPrice: '' },
    ]);
  };

  const removeEntry = (index) => {
    const updated = [...portfolio];
    updated.splice(index, 1);
    setPortfolio(updated.length > 0 ? updated : [{ id: '', quantity: '', buyPrice: '' }]);
  };

  const getCoinData = (id) => coins?.find((coin) => coin.id === id);

  if (!coins || coins.length === 0) {
    return <div className="portfolio">Loading portfolio data...</div>;
  }

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <button onClick={addNewEntry}>+ Add Coin</button>
      <div className="table-container">
            <table className="portfolio-table">

        <thead>
          <tr>
            <th>Coin</th>
            <th className='remove5'>Quantity</th>
            <th className='remove4'>Buy Price</th>
            <th className='remove3'>Current Price ({currency.symbol})</th>
            <th className='remove2'>Total Value</th>
            <th className='remove1'>Profit / Loss</th>
            <th className='remove6'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((entry, index) => {
            const coin = getCoinData(entry.id);
            const currentPrice = coin?.current_price || 0;
            const quantity = parseFloat(entry.quantity) || 0;
            const buyPrice = parseFloat(entry.buyPrice) || 0;
            const total = currentPrice * quantity;
            const profitLoss = (currentPrice - buyPrice) * quantity;

            return (
              <tr key={index}>

                <td>
                  <select
                    value={entry.id}
                    onChange={(e) => handleChange(index, 'id', e.target.value)}
                  >
                    <option value="">Select Coin</option>
                    {coins.map((coin) => (
                      <option key={coin.id} value={coin.id}>
                        {coin.name}
                      </option>
                    ))}
                  </select>
                </td>

                <td className='remove5'>
                  <input
                    type="number"
                    step="any"
                    value={entry.quantity}
                    onChange={(e) =>
                      handleChange(index, 'quantity', e.target.value)
                    }
                    placeholder="e.g. 2.5"
                  />
                </td>

                <td className='remove4'>
                  <input
                    type="number"
                    step="any"
                    value={entry.buyPrice}
                    onChange={(e) =>
                      handleChange(index, 'buyPrice', e.target.value)
                    }
                    placeholder="e.g. 15000"
                  />
                </td>

                <td className='remove3'>{currency.symbol}{currentPrice.toLocaleString()}</td>
                <td className='remove2'>{currency.symbol}{total.toLocaleString()}</td>
                <td className='remove1' style={{ color: profitLoss >= 0 ? 'green' : 'red' }}>
                  {currency.symbol}
                  {profitLoss.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td className='remove6'>
                  <button onClick={() => removeEntry(index)} style={{ color: 'black' }}>
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Portfolio;
