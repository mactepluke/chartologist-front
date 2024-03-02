export interface BacktestingSettings {
  market: string,
  symbol: string,
  timeframe: string,
  range: {
    start: Date,
    end: Date
  },
  balance: number
}
