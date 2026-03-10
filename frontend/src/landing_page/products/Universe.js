import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const partners = [
    { name: "Smallcase", desc: "Thematic investment platform" },
    { name: "Streak", desc: "Algorithmic trading platform" },
    { name: "Sensibull", desc: "Options trading platform" },
    { name: "Ditto", desc: "Insurance simplified" },
    { name: "GoldenPi", desc: "Bonds investment platform" },
    { name: "Zerodha Fund", desc: "Asset management" },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{ fontWeight: 600, marginBottom: '12px' }}>The TradePulse Universe</h1>
        <p style={{ color: '#a1a1aa', maxWidth: '550px', margin: '0 auto 40px' }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {partners.map((p, i) => (
          <div key={i} className="col-4 p-3 mt-3">
            <div style={{
              padding: '32px 20px',
              backgroundColor: '#0a0a0a',
              border: '1px solid #27272a',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
            }}>
              <h5 style={{ fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{p.name}</h5>
              <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: 0 }}>{p.desc}</p>
            </div>
          </div>
        ))}

        <div className="mt-5 mb-5">
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button
              className="p-3 fs-5"
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 500,
                padding: '14px 48px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px 0 rgba(255,255,255,0.1)',
              }}
            >
              Sign up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;