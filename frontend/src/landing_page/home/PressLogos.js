import React from 'react';

const PressLogos = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            opacity: 0.6,
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            {/* The Economic Times */}
            <svg viewBox="0 0 200 40" width="120px" height="auto">
                <text x="0" y="25" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="serif">THE ECONOMIC TIMES</text>
            </svg>
            
            {/* Forbes */}
            <svg viewBox="0 0 140 40" width="80px" height="auto">
                <text x="0" y="25" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="'Arial Black', sans-serif">Forbes</text>
            </svg>
            
            {/* Business Line */}
            <svg viewBox="0 0 160 40" width="100px" height="auto">
                <text x="0" y="25" fill="#fff" fontSize="18" fontStyle="italic" fontWeight="600" fontFamily="sans-serif">Business Line</text>
            </svg>
            
            {/* The Hindu */}
            <svg viewBox="0 0 140 40" width="90px" height="auto">
                <text x="0" y="25" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif">THE HINDU</text>
            </svg>
            
            {/* Mint */}
            <svg viewBox="0 0 100 40" width="60px" height="auto">
                <text x="0" y="25" fill="#fff" fontSize="24" fontWeight="300" fontFamily="sans-serif">mint</text>
            </svg>
        </div>
    )
}

export default PressLogos;
