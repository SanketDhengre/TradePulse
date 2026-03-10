import React, { useState, useEffect } from 'react';

const HeroDashboard = () => {
  const FINNHUB_KEY = process.env.REACT_APP_FINNHUB_KEY;
  
  const [stocks, setStocks] = useState([
    { ticker: 'AAPL', finnhubId: 'AAPL', name: 'Apple Inc.', price: 189.43, change: 1.2, up: true, flashing: null },
    { ticker: 'TSLA', finnhubId: 'TSLA', name: 'Tesla', price: 212.05, change: -0.8, up: false, flashing: null },
    { ticker: 'NVDA', finnhubId: 'NVDA', name: 'NVIDIA', price: 820.50, change: 0.5, up: true, flashing: null },
    { ticker: 'BTC', finnhubId: 'BINANCE:BTCUSDT', name: 'Bitcoin', price: 64210.00, change: 4.2, up: true, flashing: null }
  ]);

  const [portfolioTotal, setPortfolioTotal] = useState(124592.40);
  const [portfolioChange, setPortfolioChange] = useState(4210.50);

  // Fetch true initial data from Finnhub REST API
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const stocksToFetch = ['AAPL', 'TSLA', 'NVDA'];
        
        const fetchedData = await Promise.all(stocksToFetch.map(async (symbol) => {
          const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`);
          const data = await res.json();
          return { symbol, data };
        }));

        setStocks(prev => prev.map(stock => {
          const apiStock = fetchedData.find(f => f.symbol === stock.ticker);
          if (apiStock && apiStock.data && apiStock.data.c) { // 'c' is current price
            return {
              ...stock,
              price: apiStock.data.c,
              change: apiStock.data.dp || stock.change, // 'dp' is percent change
              up: (apiStock.data.dp || 0) >= 0
            };
          }
          return stock;
        }));
      } catch (error) {
        console.error("Finnhub REST fetch error:", error);
      }
    };
    
    fetchInitialData();
  }, []);

  // Real-time Finnhub WebSocket + Fallback simulation
  useEffect(() => {
    // 1. Setup Finnhub WebSocket (Real Live Trades)
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${FINNHUB_KEY}`);

    socket.addEventListener('open', function (event) {
      stocks.forEach(s => {
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': s.finnhubId}));
      });
    });

    socket.addEventListener('message', function (event) {
      const parsedData = JSON.parse(event.data);
      if (parsedData.type === 'trade' && parsedData.data) {
        // Find the latest trade for each symbol
        const latestTrades = {};
        parsedData.data.forEach(trade => {
           latestTrades[trade.s] = trade.p; // 's' is symbol, 'p' is price
        });

        setStocks(prevStocks => prevStocks.map(stock => {
          if (latestTrades[stock.finnhubId]) {
            const newPrice = latestTrades[stock.finnhubId];
            if (newPrice !== stock.price) {
              const isUp = newPrice >= stock.price;
              return {
                ...stock,
                price: newPrice,
                up: isUp,
                flashing: isUp ? 'green' : 'red'
              };
            }
          }
          return stock;
        }));
      }
    });

    // 2. Simulated Ticking (Fallback for when market is closed or crypto pauses)
    const tickInterval = setInterval(() => {
      setStocks(prevStocks => prevStocks.map(stock => {
        if (Math.random() > 0.3) return { ...stock, flashing: null }; // Clear flash
        
        // Very subtle perturbance to keep UI looking alive even after hours
        const changeFactor = 1 + (Math.random() * 0.0004 - 0.0002); 
        const newPrice = stock.price * changeFactor;
        const isUp = newPrice >= stock.price;
        
        return {
          ...stock,
          price: newPrice,
          up: isUp,
          flashing: isUp ? 'green' : 'red'
        };
      }));

      // Perturb portfolio slightly based on time
      setPortfolioTotal(prev => {
        const newTotal = prev * (1 + (Math.random() * 0.0002 - 0.0001));
        setPortfolioChange(newTotal - 120000); 
        return newTotal;
      });

    }, 3000);

    return () => {
      clearInterval(tickInterval);
      if (socket.readyState === 1) {
        stocks.forEach(s => {
          socket.send(JSON.stringify({'type':'unsubscribe', 'symbol': s.finnhubId}));
        });
        socket.close();
      }
    };
  }, []);
  
  const formatMoney = (val) => val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatChange = (val) => (val > 0 ? '+' : '') + val.toFixed(2) + '%';

  return (
    <div style={{
      width: '100%',
      maxWidth: '850px',
      margin: '0 auto 40px',
      aspectRatio: '16 / 10',
      background: '#0a0a0a',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.8), 0 0 100px -20px rgba(50, 145, 255, 0.15)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Top Navigation Bar */}
      <div style={{
        height: '60px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Dashboard', 'Portfolio', 'Markets', 'News'].map((item, idx) => (
            <div key={idx} style={{ 
              color: idx === 0 ? '#fff' : '#888', 
              fontSize: '0.85rem', 
              fontWeight: idx === 0 ? 500 : 400 
            }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #3291ff, #0a0a0a)' }}></div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Sidebar - Watchlist */}
        <div style={{
          width: '280px',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Watchlist
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 8px #27c93f', animation: 'pulse 1.5s infinite' }}></div>
          </div>
          <style>
            {`
              @keyframes pulse {
                0% { opacity: 1; }
                50% { opacity: 0.3; }
                100% { opacity: 1; }
              }
            `}
          </style>
          
          {stocks.map((stock, idx) => (
            <div key={idx} style={{
              padding: '12px 16px',
              background: stock.flashing === 'green' ? 'rgba(39, 201, 63, 0.15)' : 
                         stock.flashing === 'red' ? 'rgba(255, 95, 86, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'background-color 0.4s ease'
            }}>
              <div>
                <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>{stock.ticker}</div>
                <div style={{ color: '#888', fontSize: '0.75rem' }}>{stock.name}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: stock.flashing === 'green' ? '#27c93f' : stock.flashing === 'red' ? '#ff5f56' : '#fff', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.3s ease' }}>
                  ${formatMoney(stock.price)}
                </div>
                <div style={{ color: stock.up ? '#27c93f' : '#ff5f56', fontSize: '0.75rem' }}>
                  {formatChange(stock.change)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Main Area - Chart */}
        <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '8px' }}>Portfolio Total</div>
              <div style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-1px', transition: 'color 0.3s ease' }}>
                ${formatMoney(portfolioTotal)}
              </div>
              <div style={{ color: portfolioChange >= 0 ? '#27c93f' : '#ff5f56', fontSize: '0.9rem', marginTop: '4px' }}>
                {portfolioChange >= 0 ? '+' : ''} ${formatMoney(portfolioChange)} ({(portfolioChange/120000*100).toFixed(2)}%) Today
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['1D', '1W', '1M', '1Y', 'ALL'].map((tf, idx) => (
                <div key={idx} style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  background: idx === 0 ? 'rgba(50, 145, 255, 0.15)' : 'transparent',
                  color: idx === 0 ? '#3291ff' : '#888',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}>
                  {tf}
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, marginTop: '40px', position: 'relative' }}>
            {/* SVG Chart Silhouette */}
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 200">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(50, 145, 255, 0.3)" />
                  <stop offset="100%" stopColor="rgba(50, 145, 255, 0)" />
                </linearGradient>
              </defs>
              <path 
                d="M0,150 Q50,140 100,100 T200,80 T300,110 T400,40 T500,20 L500,200 L0,200 Z" 
                fill="url(#chartGradient)" 
              />
              <path 
                d="M0,150 Q50,140 100,100 T200,80 T300,110 T400,40 T500,20" 
                fill="none" 
                stroke="#3291ff" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Point highlights */}
              <circle cx="200" cy="80" r="4" fill="#0a0a0a" stroke="#3291ff" strokeWidth="2" />
              <circle cx="300" cy="110" r="4" fill="#0a0a0a" stroke="#3291ff" strokeWidth="2" />
              <circle cx="400" cy="40" r="4" fill="#0a0a0a" stroke="#3291ff" strokeWidth="2" />
              <circle cx="500" cy="20" r="6" fill="#fff" stroke="#3291ff" strokeWidth="3" style={{ filter: 'drop-shadow(0 0 8px #3291ff)' }} />
            </svg>
            <div style={{ 
              position: 'absolute', 
              top: '0', 
              right: '20px', 
              background: '#fff', 
              color: '#000', 
              padding: '6px 12px', 
              borderRadius: '20px', 
              fontSize: '0.8rem', 
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(255,255,255,0.2)'
            }}>
              $124k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
