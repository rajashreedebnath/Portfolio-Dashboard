import { useState, useEffect } from 'react';
import axios from 'axios';
import { Portfolio } from '../types';

const API_URL = 'http://localhost:5000/api/portfolio';

export const usePortfolioData = () => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setPortfolio(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch portfolio data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000); // 15 seconds
    return () => clearInterval(interval);
  }, []);

  return { portfolio, loading, error, refetch: fetchData };
};
