import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h4 style={{ fontWeight: 600 }}>Support Portal</h4>
                <a href="" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Track Tickets</a>
            </div>
            <div className="row p-5 m-3">
                <div className="col-6 p-3">
                    <h1 className="fs-3" style={{ fontWeight: 600, marginBottom: '24px' }}>
                        Search for an answer or browse help topics to create a
                        ticket
                    </h1>
                    <input 
                        placeholder="Eg. how do I activate F&O" 
                        style={{
                            width: '100%',
                            padding: '14px 18px',
                            backgroundColor: '#141414',
                            border: '1px solid #27272a',
                            borderRadius: '8px',
                            color: '#ededed',
                            fontSize: '0.95rem',
                            outline: 'none',
                            marginBottom: '20px',
                            transition: 'all 0.2s ease',
                        }}
                    />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                        {["Track account opening", "Track segment activation", "Intraday margins", "Kite user manual"].map((label, i) => (
                            <a 
                                key={i} 
                                href="" 
                                style={{ 
                                    display: 'inline-block',
                                    padding: '8px 16px',
                                    backgroundColor: '#141414',
                                    border: '1px solid #27272a',
                                    borderRadius: '6px',
                                    color: '#a1a1aa',
                                    fontSize: '0.85rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-6 p-3">
                    <h1 className="fs-3" style={{ fontWeight: 600, marginBottom: '16px' }}>Featured</h1>
                    <ol style={{ paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '12px' }}>
                            <a href="" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.95rem' }}>
                                Current Takeovers and Delisting - January 2024
                            </a>
                        </li>
                        <li>
                            <a href="" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.95rem' }}>
                                Latest Intraday leverages - MIS & CO
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
