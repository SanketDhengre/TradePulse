import React, { useState, useEffect } from "react";
import Menu from "./Menu";

const TopBar = () => {
  const ALPHA_VANTAGE_KEY = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

  const [nifty, setNifty] = useState({ price: 22450.10, percent: 0.95, flashing: null });
  const [sensex, setSensex] = useState({ price: 74120.50, percent: 1.05, flashing: null });

  // Fetch initial base data using Alpha Vantage
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        // Fetch proxy stocks to get relative market direction (using known tickers to avoid AV errors)
        const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=RELIANCE.BSE&apikey=${ALPHA_VANTAGE_KEY}`);
        const data = await res.json();
        
        if (data && data["Global Quote"] && data["Global Quote"]["05. price"]) {
          const changePercent = parseFloat(data["Global Quote"]["10. change percent"].replace("%", ""));
          // Adjust our indices loosely based on market direction
          setNifty(prev => ({ ...prev, percent: changePercent }));
          setSensex(prev => ({ ...prev, percent: changePercent * 1.1 }));
        }
      } catch (err) {
        console.error("AV fetch error:", err);
      }
    };
    
    fetchMarketData();
  }, []);

  // Tick simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setNifty(prev => {
        if (Math.random() > 0.4) return { ...prev, flashing: null };
        const newPrice = prev.price * (1 + (Math.random() * 0.0006 - 0.0003));
        return { ...prev, price: newPrice, flashing: newPrice >= prev.price ? 'green' : 'red' };
      });

      setSensex(prev => {
        if (Math.random() > 0.4) return { ...prev, flashing: null };
        const newPrice = prev.price * (1 + (Math.random() * 0.0006 - 0.0003));
        return { ...prev, price: newPrice, flashing: newPrice >= prev.price ? 'green' : 'red' };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (val) => val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatChange = (val) => (val > 0 ? '+' : '') + val.toFixed(2) + '%';

  return (
    <div className="topbar-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid #141414', background: '#0a0a0a' }}>
      <div className="indices-container" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div className="nifty" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <p className="index" style={{ color: '#a1a1aa', fontWeight: 600, fontSize: '0.85rem', margin: 0 }}>NIFTY 50</p>
          <p className="index-points" style={{ 
            color: nifty.flashing === 'green' ? '#27c93f' : nifty.flashing === 'red' ? '#ff5f56' : '#fff', 
            fontWeight: 500, margin: 0, transition: 'color 0.3s ease' 
          }}>
            {formatPrice(nifty.price)}
          </p>
          <p className="percent" style={{ color: nifty.percent >= 0 ? '#27c93f' : '#ff5f56', fontSize: '0.75rem', margin: 0 }}>
            {formatChange(nifty.percent)}
          </p>
        </div>
        <div className="sensex" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <p className="index" style={{ color: '#a1a1aa', fontWeight: 600, fontSize: '0.85rem', margin: 0 }}>SENSEX</p>
          <p className="index-points" style={{ 
            color: sensex.flashing === 'green' ? '#27c93f' : sensex.flashing === 'red' ? '#ff5f56' : '#fff', 
            fontWeight: 500, margin: 0, transition: 'color 0.3s ease' 
          }}>
            {formatPrice(sensex.price)}
          </p>
          <p className="percent" style={{ color: sensex.percent >= 0 ? '#27c93f' : '#ff5f56', fontSize: '0.75rem', margin: 0 }}>
            {formatChange(sensex.percent)}
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
