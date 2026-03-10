# TradePulse

🚀 **Live Project:** [https://frontend-gamma-five-34.vercel.app/](https://frontend-gamma-five-34.vercel.app/)

**TradePulse** is a small full‑stack trading dashboard and landing site project composed of:

- backend — Express + Mongoose API that stores holdings, positions and orders (MongoDB)
- dashboard — React dashboard UI (charts, holdings, positions, watchlist)
- frontend — Landing pages for marketing and signup

This README explains how the project is organized, how to run it locally, how the API works, and how to contribute.

---

## Table of contents

- [Features](#features)
- [Project structure](#project-structure)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started (local development)](#getting-started-local-development)
  - [Backend](#backend)
  - [Dashboard (React app)](#dashboard-react-app)
  - [Landing site (Frontend)](#landing-site-frontend)
- [API](#api)
- [Environment variables](#environment-variables)
- [Common tasks](#common-tasks)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features ✅

- Simple REST API with endpoints to get holdings/positions and post new orders
- Dashboard with charts and interactive watchlist, holdings and positions views
- Landing pages for marketing / information

---

## Project structure 🗂️

Top-level folders:

- `backend/` — Express server and Mongoose models & schemas
  - `index.js` — server entrypoint (routes: `/allHoldings`, `/allPositions`, `/newOrder`)
  - `model/` — model definitions
  - `schemas/` — Mongoose schemas
- `dashboard/` — React dashboard application (charts, holdings/positions components)
- `frontend/` — React landing pages (Home, About, Product, Pricing, Signup, Support)

See each subproject `package.json` for scripts and dependencies.

---

## Tech stack ⚙️

- Backend: Node.js, Express, Mongoose (MongoDB), dotenv, cors
- Dashboard & frontend: React, react-router-dom, react-scripts
- Charts: Chart.js + react-chartjs-2 (dashboard)

---

## Prerequisites 📋

- Node.js (>= 18 recommended)
- npm (comes with Node.js)
- MongoDB instance (local or cloud Atlas)

---

## Getting started (local development) 🏃‍♂️

> Note: This repository contains 2 separate React apps and 1 backend service — run them independently.

### Backend

1. Open a terminal and go to `backend/`:

```bash
cd backend
npm install
```

2. Create a `.env` file in `backend/` with your MongoDB connection (see [Environment variables](#environment-variables)).

3. Start the backend server (nodemon is configured):

```bash
npm start
```

The backend listens on `PORT` (default 3002) and exposes REST endpoints used by the dashboard.

---

### Dashboard (React app)

1. Open a terminal, go to `dashboard/`:

```bash
cd dashboard
npm install
npm start
```

2. The dashboard expects the backend to be available (default: `http://localhost:3002`).

---

### Landing site (Frontend)

1. Open a terminal, go to `frontend/`:

```bash
cd frontend
npm install
npm start
```

2. The landing site runs at `http://localhost:3000` by default.

---

## API 📡

Endpoints provided by the backend (default `http://localhost:3002`):

- `GET /allHoldings` — Returns all holdings documents (array)
- `GET /allPositions` — Returns all positions documents (array)
- `POST /newOrder` — Create a new order. Example body (JSON):

```json
{
  "name": "RELIANCE",
  "qty": 1,
  "price": 2100.5,
  "mode": "buy" 
}
```

Responses are simple: `newOrder.save()` returns a text confirmation in the current implementation.

---

## Environment variables

For the backend, create `backend/.env` with at least:

```
MONGO_URI=<your_mongo_connection_string>
PORT=3002
```

Replace `<your_mongo_connection_string>` with your MongoDB URI.

---

## Repository maintenance

- Keep a single root `.gitignore` to ignore dependencies and build artifacts (for example: `node_modules/`, `.env`, `build/`, `dist/`).
- Avoid committing large dependency directories or sensitive files. If a nested `.git` exists, back it up and remove it to avoid nested repositories.

---

## Contributing 🤝

- Fork the repo and create a branch for your feature or bugfix.
- Open a Pull Request to `main` with a descriptive title and summary.
- Prefer small, focused PRs and include relevant screenshots or API examples when applicable.

---

## Contact / Author

**Repository:** SanketDhengre/TradePulse

---
