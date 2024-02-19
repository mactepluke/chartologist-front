import {Component} from '@angular/core';
import {
  BacktestingSettingsPanelComponent
} from "../components/backtesting-settings-panel/backtesting-settings-panel.component";
import {
  BacktestingResultsPanelComponent
} from "../components/backtesting-results-panel/backtesting-results-panel.component";
import {ResultsBlockComponent} from "../components/results-block/results-block.component";
import {ResultsBlockItem} from "../models/ResultsBlockItem";
import {BasicBacktestingResults} from "../models/BasicBacktestingResults";
import {ResultsBlockContent} from "../models/ResultsBlockContent";
import {NgForOf} from "@angular/common";
import {BacktestingService} from "../services/backtesting.service";

@Component({
  selector: 'sycm-backtesting-page',
  standalone: true,
  imports: [
    BacktestingSettingsPanelComponent,
    BacktestingResultsPanelComponent,
    ResultsBlockComponent,
    NgForOf
  ],
  providers: [
    BacktestingService
  ],
  templateUrl: './backtesting-page.component.html',
  styleUrl: './backtesting-page.component.css'
})
export class BacktestingPageComponent {
  contents: ResultsBlockContent[] = [];
  backtestingResults!: BasicBacktestingResults;
  displayResultsBlocks = false;

  constructor(private backtestingService: BacktestingService) {
  }


  launchBackTesting($event: boolean) {

    this.backtestingResults = {
      accountBalance: 12460,
      initialAccountBalance: 10000,
      trades: [],
      pnl: 2460,
      returnPercentage: 61,
      annualizedReturnPercentage: 167,
      tradeNumber: 10,
      avgReturnPerTradePercentage: 12,
      battingAveragePercentage: 70,
      winLossRatio: 1.5,
      profitFactor: 2,
      totalDurationInDays: 30,
      actualTradingDurationPercentage: 60,
      riskPercentage: 2,
      feePercentage: 0.1,
      orderRole: 'taker'
    };

    this.contents = this.generateResultsBlockContents(this.backtestingResults);

    this.displayResultsBlocks = true;
  }

  protected generateResultsBlockContents(ofResults: BasicBacktestingResults): ResultsBlockContent[] {

    let contents: ResultsBlockContent[] = [];

    let items: ResultsBlockItem[] = [
      {name: 'Account Balance', unit: '$', value: ofResults.accountBalance},
      {name: 'Initial Balance', unit: '$', value: ofResults.trades[0]?.accountBalanceAtOpen || 0},
      {name: 'PnL', unit: '$', value: ofResults.pnl},
      {name: 'Return', unit: '%', value: ofResults.returnPercentage},
      {name: 'Annualized Return', unit: '%', value: ofResults.annualizedReturnPercentage}
    ]

    contents.push(new ResultsBlockContent(items));

    items = [
      {name: 'Trades', unit: '', value: ofResults.tradeNumber},
      {name: 'Avg. Return per Trade', unit: '%', value: ofResults.avgReturnPerTradePercentage},
      {name: 'Batting Average', unit: '%', value: ofResults.battingAveragePercentage},
      {name: 'Win to Loss Ratio', unit: '', value: ofResults.winLossRatio},
      {name: 'Profit Factor', unit: '', value: ofResults.profitFactor}
    ]

    contents.push(new ResultsBlockContent(items));

    items = [
      {name: 'Total Duration in days', unit: '', value: ofResults.totalDurationInDays},
      {name: 'Actual Trading Duration', unit: '%', value: ofResults.actualTradingDurationPercentage},
      {name: 'Risk Per Trade', unit: '%', value: ofResults.riskPercentage},
      {name: 'Fee Percentage', unit: '%', value: ofResults.feePercentage},
      {name: 'Order Role', unit: '', value: ofResults.orderRole}
    ]

    contents.push(new ResultsBlockContent(items));

    return contents;
  }
}
