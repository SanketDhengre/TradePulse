import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5" style={{ fontSize: '2.8rem', fontWeight: 600, letterSpacing: '-0.02em' }}>Open a TradePulse account</h1>
                <p style={{ fontSize: '1.1rem', color: '#a1a1aa', maxWidth: '550px', margin: '12px auto 32px' }}>
                    Modern platforms and apps, ₹0 investments, and flat ₹20
                    intraday and F&O trades.
                </p>
                <div>
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

export default OpenAccount;
