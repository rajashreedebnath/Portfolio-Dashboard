export interface Stock {
  no: number;
  name: string;
  purchasePrice: number;
  qty: number;
  investment: number;
  portfolioPercent: number;
  nseBse: string;
  cmp: number | null;
  presentValue: number | null;
  gainLoss: number | null;
  gainLossPercent: string | null;
  peRatio: number | null;
  latestEarnings: number | null;
  marketCap: number | null;
  mustExit: string;
}

export interface Sector {
  name: string;
  totalInvestment: number;
  percentage: number;
  totalPresentValue: number | null;
  totalGainLoss: number | null;
  stocks: Stock[];
}

export interface Portfolio {
  sectors: Sector[];
}
