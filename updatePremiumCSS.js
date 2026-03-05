const fs = require('fs');

const frontendCssPath = 'C:/Sanket Projects/TradePulse/frontend/src/index.css';
const dashboardCssPath = 'C:/Sanket Projects/TradePulse/dashboard/src/index.css';

function cleanAndRead(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('/* --- TRADEPULSE PREMIUM DARK THEME --- */')) {
    content = content.split('/* --- TRADEPULSE PREMIUM DARK THEME --- */')[0];
  }
  return content;
}

let frontendCss = cleanAndRead(frontendCssPath);
let dashboardCss = cleanAndRead(dashboardCssPath);

const premiumCSS = `
/* --- TRADEPULSE SILICON VALLEY PREMIUM THEME --- */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');

:root {
  --bg-color: #030303;
  --bg-panel: #0a0a0a;
  --bg-hover: #141414;
  --text-primary: #ededed;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --border-color: #27272a;
  --border-glow: rgba(255, 255, 255, 0.1);
  --accent-blue: #0070f3;
  --accent-blue-hover: #3291ff;
  --accent-green: #10b981;
  --accent-red: #ef4444;
  --accent-orange: #f5a623;
  
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-heading: 'Outfit', var(--font-sans);
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-glow: 0 0 15px rgba(0, 112, 243, 0.2);
  --transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  font-family: var(--font-sans);
  letter-spacing: -0.01em;
}

body {
  background-color: var(--bg-color) !important;
  color: var(--text-primary) !important;
  font-family: var(--font-sans) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6, .title, .index, .username h6 {
  font-family: var(--font-heading) !important;
  font-weight: 500 !important;
  letter-spacing: -0.02em !important;
  color: #fff !important;
}

/* Glassmorphism & Panel Styling */
.topbar-container, .watchlist-number, .action, .menu-container {
  background-color: rgba(10, 10, 10, 0.7) !important;
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border-bottom: 1px solid var(--border-color) !important;
  border-top: 1px solid var(--border-color) !important;
  box-shadow: none !important;
}

.search {
  background-color: var(--bg-hover) !important;
  color: var(--text-primary) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.95rem;
  transition: var(--transition);
}

.search:focus {
  outline: none;
  border-color: var(--accent-blue) !important;
  box-shadow: var(--shadow-glow);
}

.list li {
  border-bottom: 1px solid var(--border-color) !important;
  transition: var(--transition);
  padding: 14px 16px;
}

.list li:hover {
  background-color: var(--bg-hover) !important;
  cursor: pointer;
}

/* Buttons */
.buy, .btn-blue, .btn-primary, button[type="submit"] {
  background: var(--text-primary) !important;
  color: var(--bg-color) !important;
  border: none !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
  transition: var(--transition) !important;
  box-shadow: 0 0 0 1px var(--border-glow) inset !important;
}

.buy:hover, .btn-blue:hover, .btn-primary:hover, button[type="submit"]:hover {
  background: #fff !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px 0 rgba(255,255,255,0.1) !important;
}

.sell {
  background: transparent !important;
  color: var(--text-primary) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
  transition: var(--transition) !important;
}

.sell:hover {
  border-color: var(--accent-red) !important;
  color: var(--accent-red) !important;
  background: rgba(239, 68, 68, 0.05) !important;
}

/* Typography & Colors */
p, .menu, .counts, td, th {
  color: var(--text-secondary) !important;
  font-weight: 400;
}

.username {
  color: var(--text-primary) !important;
  font-weight: 500 !important;
}

.item-info span:nth-child(1) {
  color: var(--text-primary) !important;
  font-weight: 500;
}

.menu {
  text-transform: capitalize;
  font-weight: 500 !important;
  color: var(--text-secondary) !important;
  transition: var(--transition);
}

.menu:hover, .menu.selected {
  color: #fff !important;
}

.up, .profit, .data .first .profit, .order-table td.profit, .percent {
  color: var(--accent-green) !important;
  font-family: 'Inter', monospace;
  font-weight: 500;
}

.down, .loss, .index-points, .item-info span:nth-child(2), .item-info span:nth-child(3), .order-table td.loss, .order-table tr td:first-child p {
  color: var(--accent-red) !important;
  font-family: 'Inter', monospace;
  font-weight: 500;
}

/* Tables & Dividers */
.order-table tr, .order-table th, .order-table td, hr, .divider, .indices-container {
  border-color: var(--border-color) !important;
}

hr, .divider {
  background: var(--border-color) !important;
  opacity: 0.5;
}

/* Cards & Layout */
.card, .form-control {
  background-color: var(--bg-panel) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 12px !important;
  color: var(--text-primary) !important;
  box-shadow: var(--shadow-sm) !important;
  transition: var(--transition) !important;
}

.card:hover {
  border-color: #333 !important;
}

/* Landing Page tweaks */
.navbar, .footer, .border-bottom {
  background-color: rgba(10, 10, 10, 0.8) !important;
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border-bottom: 1px solid var(--border-color) !important;
}

.footer {
  border-top: 1px solid var(--border-color) !important;
  border-bottom: none !important;
}

a.nav-link, .navbar-brand, a, label {
  color: var(--text-secondary) !important;
  transition: var(--transition);
  text-decoration: none;
}

a:hover, a.nav-link:hover {
  color: #fff !important;
}

.text-muted {
  color: var(--text-muted) !important;
}

/* Custom Input Focus */
input:focus, .form-control:focus {
  background-color: var(--bg-hover) !important;
  border-color: var(--accent-blue) !important;
  outline: none !important;
  box-shadow: var(--shadow-glow) !important;
  color: #fff !important;
}

/* Chart Canvas filtering for dark mode */
canvas {
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.05));
}

/* Scrollbar styling for that premium feel */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-color); 
}
::-webkit-scrollbar-thumb {
  background: #333; 
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

fs.writeFileSync(frontendCssPath, frontendCss + '\n' + premiumCSS);
fs.writeFileSync(dashboardCssPath, dashboardCss + '\n' + premiumCSS);
console.log('Silicon Valley styling applied!');
