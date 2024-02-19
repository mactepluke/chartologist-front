import {Trade} from "../../core/models/Trade";

export interface BasicBacktestingResults {
  accountBalance: number;
  initialAccountBalance: number;
  pnl: number;
  returnPercentage: number;
  annualizedReturnPercentage: number;
  tradeNumber: number;
  avgReturnPerTradePercentage: number;
  battingAveragePercentage: number;
  winLossRatio: number;
  profitFactor: number;
  totalDurationInDays: number;
  actualTradingDurationPercentage: number;
  riskPercentage: number;
  feePercentage: number;
  orderRole: 'taker' | 'maker';
  trades: Trade[];
}
