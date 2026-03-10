import React from 'react';

const AwardTrophy = () => {
    return (
        <svg viewBox="0 0 400 400" width="100%" height="auto" style={{
            maxWidth: '350px',
            filter: 'drop-shadow(0px 20px 40px rgba(50, 145, 255, 0.4))'
        }}>
            <defs>
                <linearGradient id="trophyBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3291ff" />
                    <stop offset="100%" stopColor="#0366d6" />
                </linearGradient>
                <linearGradient id="trophyHighlight" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="trophyBase" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#24292e" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
            </defs>
            {/* Glowing Backdrop */}
            <circle cx="200" cy="200" r="160" fill="#3291ff" fillOpacity="0.05" />
            <circle cx="200" cy="200" r="120" fill="#3291ff" fillOpacity="0.1" />
            
            {/* Base */}
            <path d="M140,320 L260,320 L280,360 L120,360 Z" fill="url(#trophyBase)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <rect x="160" y="280" width="80" height="40" fill="url(#trophyBase)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            
            {/* Cup Bowl */}
            <path d="M100,100 C100,220 150,280 200,280 C250,280 300,220 300,100 L100,100 Z" fill="url(#trophyBody)" />
            <path d="M100,100 C100,220 150,280 200,280 C250,280 300,220 300,100 L100,100 Z" fill="url(#trophyHighlight)" />

            {/* Handles */}
            <path d="M100,120 C60,120 40,160 80,200 C100,220 120,230 140,240" fill="none" stroke="url(#trophyBody)" strokeWidth="16" strokeLinecap="round" />
            <path d="M300,120 C340,120 360,160 320,200 C300,220 280,230 260,240" fill="none" stroke="url(#trophyBody)" strokeWidth="16" strokeLinecap="round" />

            {/* Stars / Particles */}
            <circle cx="80" cy="80" r="4" fill="#fff" />
            <circle cx="340" cy="90" r="6" fill="#fff" />
            <circle cx="120" cy="30" r="5" fill="#3291ff" />
            <circle cx="300" cy="40" r="3" fill="#3291ff" />
            <circle cx="100" cy="300" r="3" fill="#fff" />

            {/* Center Star shape */}
            <path d="M200,130 L215,165 L250,170 L225,195 L230,230 L200,215 L170,230 L175,195 L150,170 L185,165 Z" fill="#fff" fillOpacity="0.9" />
        </svg>
    )
}

export default AwardTrophy;
