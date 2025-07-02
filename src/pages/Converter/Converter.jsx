import React, { useEffect, useState } from 'react';
import './Converter.css';

const CRYPTOS = [
  { id: 'bitcoin', name: 'Bitcoin' },
  { id: 'ethereum', name: 'Ethereum' },
  { id: 'ripple', name: 'Ripple' },
  { id: 'cardano', name: 'Cardano' },
];

const FIATS = ['inr', 'usd', 'eur'];

const Converter = () => {
  const [fromCrypto, setFromCrypto] = useState('bitcoin');
  const [toFiat, setToFiat] = useState('inr');
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);

  useEffect(() => {
    if (!fromCrypto || !toFiat) return;

    const fetchConversion = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${fromCrypto}&vs_currencies=${toFiat}`
        );
        const data = await res.json();
        const price = data[fromCrypto][toFiat];

        const numAmount = parseFloat(amount);
        if (isNaN(numAmount)) {
          setConverted(null);
          return;
        }

        setConverted((numAmount * price).toFixed(2));
      } catch (error) {
        console.error('API error:', error);
        setConverted(null);
      }
    };

    fetchConversion();
  }, [fromCrypto, toFiat, amount]);

  return (
    <div className="converter-page">
      <div className="converter-box">
        <h2>Crypto Converter</h2>

        <div className="input-group">
          <label>From</label>
          <select value={fromCrypto} onChange={(e) => setFromCrypto(e.target.value)}>
            {CRYPTOS.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>To</label>
          <select value={toFiat} onChange={(e) => setToFiat(e.target.value)}>
            {FIATS.map((f) => (
              <option key={f} value={f}>{f.toUpperCase()}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="result">
          {converted !== null ? (
            <p>
              {amount} {fromCrypto.toUpperCase()} = <strong>{converted} {toFiat.toUpperCase()}</strong>
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Converter;
