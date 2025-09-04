const yahooFinance = require('yahoo-finance2').default;

async function getYahooData(symbol) {
  try {
    const quote = await yahooFinance.quote(symbol);
    const summary = await yahooFinance.quoteSummary(symbol, { modules: ['summaryDetail', 'financialData'] });
    return {
      cmp: quote.regularMarketPrice,
      peRatio: summary.summaryDetail?.trailingPE,
      latestEarnings: summary.financialData?.totalRevenue, // Placeholder for latest earnings
    };
  } catch (error) {
    console.error('Error fetching Yahoo data:', error);
    throw error;
  }
}

async function getGoogleData(symbol) {
  // For now, use Yahoo for Google data as well
  return await getYahooData(symbol);
}

module.exports = { getYahooData, getGoogleData };
