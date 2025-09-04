# Portfolio Dashboard

A dynamic web application for tracking stock portfolio performance with real-time data from Yahoo Finance and Google Finance.

## Features

- Real-time stock price updates (CMP) from Yahoo Finance
- P/E Ratio and latest earnings data
- Portfolio table with gain/loss calculations
- Sector-wise grouping and summaries
- Color-coded gain/loss indicators
- Automatic updates every 15 seconds
- Responsive design

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Data Fetching**: Yahoo Finance API (unofficial), Google Finance scraping
- **Table**: React Table

## Installation

1. Clone the repository
2. Install backend dependencies:
   ```
   cd portfolio-dashboard/backend
   npm install
   ```
3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

## Usage

1. Start the backend server:
   ```
   cd portfolio-dashboard/backend
   node server.js
   ```
   The server will run on http://localhost:3001

2. Start the frontend development server:
   ```
   cd ../frontend
   npm start
   ```
   The app will open in your browser at http://localhost:3000

## API Endpoints

- `GET /api/portfolio`: Fetches the complete portfolio with live data

## Data Sources

- **Yahoo Finance**: Used for current market price (CMP)
- **Google Finance**: Used for P/E ratio and latest earnings (currently using Yahoo as proxy)

## Project Structure

```
portfolio-dashboard/
├── backend/
│   ├── server.js
│   ├── fetchData.js
│   ├── portfolioData.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PortfolioTable.js
│   │   │   └── SectorGroup.js
│   │   ├── hooks/
│   │   │   └── usePortfolioData.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Challenges Addressed

- Handling unofficial APIs and rate limiting
- Asynchronous data fetching and error handling
- Real-time updates with setInterval
- Data transformation and caching
- Responsive UI design

