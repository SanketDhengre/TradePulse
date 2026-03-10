import React from "react";
import { Link } from "react-router-dom";
import HeroDashboard from "./HeroDashboard";

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <HeroDashboard />
                <h1 className="mt-5" style={{ fontSize: '3.5rem', fontWeight: 600, letterSpacing: '-0.03em' }}>Invest in everything</h1>
                <p style={{ fontSize: '1.15rem', color: '#a1a1aa', maxWidth: '500px', margin: '16px auto 32px' }}>
                    Online platform to invest in stocks, derivatives, mutual
                    funds, and more
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
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
