import React from 'react';
import PortfolioTable from './PortfolioTable';

const SectorGroup = ({ sector }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{sector.name}</h2>
      <div style={{ marginBottom: '1rem' }}>
        <p>Total Investment: {sector.totalInvestment}</p>
        <p>Total Present Value: {sector.totalPresentValue?.toFixed(2) || 'Loading...'}</p>
        <p style={{ color: sector.totalGainLoss && sector.totalGainLoss >= 0 ? 'green' : 'red' }}>
          Gain/Loss: {sector.totalGainLoss?.toFixed(2) || 'Loading...'}
        </p>
      </div>
      <PortfolioTable stocks={sector.stocks} />
    </div>
  );
};

export default SectorGroup;
