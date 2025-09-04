const express = require('express');
const cors = require('cors');
const portfolioData = require('./portfolioData');
const { getYahooData, getGoogleData } = require('./fetchData');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/portfolio', async (req, res) => {
  try {
    const portfolio = JSON.parse(JSON.stringify(portfolioData));

    // Fetch data for each stock
    for (const sector of portfolio.sectors) {
      for (const stock of sector.stocks) {
        try {
          const yahooData = await getYahooData(stock.nseBse);
          stock.cmp = yahooData.cmp;
          stock.presentValue = stock.cmp * stock.qty;
          stock.gainLoss = stock.presentValue - stock.investment;
          stock.gainLossPercent = (stock.gainLoss / stock.investment) * 100;

          const googleData = await getGoogleData(stock.nseBse);
          stock.peRatio = googleData.peRatio;
          stock.latestEarnings = googleData.latestEarnings;
        } catch (error) {
          console.error(`Error fetching data for ${stock.name}:`, error);
          // Keep null values
        }
      }

      // Calculate sector totals
      sector.totalPresentValue = sector.stocks.reduce((sum, stock) => sum + (stock.presentValue || 0), 0);
      sector.totalGainLoss = sector.totalPresentValue - sector.totalInvestment;
    }

    res.json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    res.status(500).json({ error: 'Failed to fetch portfolio data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
