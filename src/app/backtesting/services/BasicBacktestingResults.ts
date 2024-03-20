import {Trade} from "../../core/models/Trade";

export interface BasicBacktestingResults {
  accountBalance: number;
  pnl: number;
  returnPercentage: number;
  annualizedReturnPercentage: number;
  tradeNumber: number;
  battingAveragePercentage: number;
  winLossRatio: number;
  profitFactor: number;
  totalDurationInDays: number;
  actualTradingDurationPercentage: number;
  feePercentage: number;
  trades: Trade[];

}
