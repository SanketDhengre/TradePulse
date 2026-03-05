const fs = require('fs');

const darkThemeCSS = `
/* --- TRADEPULSE PREMIUM DARK THEME --- */
:root {
  --bg-color: #0b0e14;
  --bg-panel: #151924;
  --bg-hover: #1e2433;
  --text-primary: #e0e3eb;
  --text-secondary: #8b93a6;
  --border-color: #2b313f;
  --accent-blue: #2962ff;
  --accent-green: #00c853;
  --accent-red: #ff3d00;
  --accent-orange: #ff9100;
}

body {
  background-color: var(--bg-color) !important;
  color: var(--text-primary) !important;
}

/* Dashboard overrides */
.topbar-container, .watchlist-number, .action, .menu-container {
  background-color: var(--bg-panel) !important;
  border-color: var(--border-color) !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
}
.indices-container, .search, .list li, .order-table tr, .order-table th, .order-table td, hr, .divider {
  border-color: var(--border-color) !important;
}
.search {
  background-color: var(--bg-panel) !important;
  color: var(--text-primary) !important;
}
p, h1, h2, h3, h4, h5, h6, .title, .menu, .username, .counts, .item-info span:nth-child(1), .index, td, th {
  color: var(--text-primary) !important;
}
.menu.selected {
  color: var(--accent-orange) !important;
}
.up, .profit, .data .first .profit, .order-table td.profit, .percent {
  color: var(--accent-green) !important;
}
.down, .loss, .index-points, .item-info span:nth-child(2), .item-info span:nth-child(3), .order-table td.loss, .order-table tr td:first-child p {
  color: var(--accent-red) !important;
}
.buy, .btn-blue, .btn-primary {
  background-color: var(--accent-blue) !important;
  border-color: var(--accent-blue) !important;
  color: #fff !important;
}
.sell {
  background-color: var(--accent-red) !important;
  border-color: var(--accent-red) !important;
  color: #fff !important;
}
.icon, .section-icon {
  color: var(--text-secondary) !important;
}
.col p, .data .second p {
  color: var(--text-secondary) !important;
}
.btn-outline { 
  color: var(--accent-blue) !important; 
  border: 1px solid var(--accent-blue) !important; 
}
.order-table tr td:first-child p {
    background: rgba(255, 61, 0, 0.15) !important;
}

/* Frontend overrides */
.navbar, .footer, .border-bottom {
  background-color: var(--bg-panel) !important;
  border-color: var(--border-color) !important;
}
a.nav-link, .navbar-brand, a, .text-muted, label {
  color: var(--text-primary) !important;
}
a:hover {
  color: var(--accent-blue) !important;
}
.text-muted {
  color: var(--text-secondary) !important;
}
.card, .form-control {
  background-color: var(--bg-panel) !important;
  border-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}
form p, form label {
  color: var(--text-primary) !important;
}
`;

const frontendCssPath = 'C:/Sanket Projects/TradePulse/frontend/src/index.css';
const dashboardCssPath = 'C:/Sanket Projects/TradePulse/dashboard/src/index.css';

fs.appendFileSync(frontendCssPath, darkThemeCSS);
fs.appendFileSync(dashboardCssPath, darkThemeCSS);
console.log('CSS updated successfully.');
