export interface Trade {
  openDateTime: Date;
  lastUpdate: Date;
  platform: string;
  symbol: string;
  timeFrame: string;
  accountBalanceAtOpen: number;
  size: number;
  expectedClose: Date;
  expiry: Date;
  closeDateTime: Date;
  status: string;
  side: 'long' | 'short';
  openPrice: number;
  closePrice: number;
  takeProfit: number;
  stopLoss: number;
  leverage: number;
  takeProfitPricePercentage: number;
  stopLossPricePercentage: number;
  expectedProfit: number;
  rewardToRiskRatio: number;
  pnl: number;
  feePercentage: number;
  feeAmount: number;
}
