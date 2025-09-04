import React from 'react';
import PortfolioTable from './PortfolioTable';
import { Sector } from '../types';

interface SectorGroupProps {
  sector: Sector;
}

const SectorGroup = ({ sector }: SectorGroupProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{sector.name}</h2>
      <div className="mb-4">
        <p>Total Investment: {sector.totalInvestment}</p>
        <p>Total Present Value: {sector.totalPresentValue?.toFixed(2) || 'Loading...'}</p>
        <p className={sector.totalGainLoss && sector.totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}>
          Gain/Loss: {sector.totalGainLoss?.toFixed(2) || 'Loading...'}
        </p>
      </div>
      <PortfolioTable stocks={sector.stocks} />
    </div>
  );
};

export default SectorGroup;
