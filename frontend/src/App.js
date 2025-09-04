import React from 'react';
import SectorGroup from './components/SectorGroup';
import { usePortfolioData } from './hooks/usePortfolioData';

function App() {
  const { portfolio, loading, error } = usePortfolioData();

  if (loading) return <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>Loading...</div>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '2.5rem', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Portfolio Dashboard</h1>
      {portfolio?.sectors.map(sector => (
        <SectorGroup key={sector.name} sector={sector} />
      ))}
    </div>
  );
}

export default App;
