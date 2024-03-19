import {Component} from '@angular/core';
import {
  BacktestingSettingsPanelComponent
} from "../components/backtesting-settings-panel/backtesting-settings-panel.component";
import {ResultsBlockComponent} from "../components/results-block/results-block.component";
import {ResultsBlockItem} from "../models/ResultsBlockItem";
import {BasicBacktestingResults} from "../models/BasicBacktestingResults";
import {ResultsBlockContent} from "../models/ResultsBlockContent";
import {NgForOf} from "@angular/common";
import {BacktestingService} from "../services/backtesting.service";
import {BacktestingSettings} from "../models/BacktestingSettings";
import {Trade} from "../../core/models/Trade";
import {MatProgressBar} from "@angular/material/progress-bar";
import {DisplayService} from "../../shared_services/display.service";
import {timeout} from "rxjs";

@Component({
  selector: 'sycm-backtesting-page',
  standalone: true,
  imports: [
    BacktestingSettingsPanelComponent,
    ResultsBlockComponent,
    NgForOf,
    MatProgressBar
  ],
  providers: [
    BacktestingService,
    DisplayService
  ],
  templateUrl: './backtesting-page.component.html',
  styleUrl: './backtesting-page.component.css'
})

export class BacktestingPageComponent {
  contents: ResultsBlockContent[] = [];
  displayResultsBlocks = false;
  serverIsBusy = false;

  constructor(private backtestingService: BacktestingService, private displayService: DisplayService) {
  }


  launchBackTesting($settings: BacktestingSettings) {

    this.displayResultsBlocks = false;
    this.serverIsBusy = true;

    this.backtestingService.runBackTesting($settings.symbol, $settings.timeframe, $settings.range.start, $settings.range.end, $settings.balance)
      .pipe(
        timeout(60000)
      )
      .subscribe({
          next: (results: BasicBacktestingResults) => {
            this.contents = this.generateResultsBlockContents(results);
            this.serverIsBusy = false;
            this.displayResultsBlocks = true;
            this.displayService.openSnackBar('Backtesting finished')
          },
          error: (error) => {
            if (error.name === 'TimeoutError') {
              this.serverIsBusy = false;
              console.log('Request has timed out.');
              this.displayService.openSnackBar('Error: Request has timed out.');
            } else {
              this.serverIsBusy = false;
              console.log('Error: could not load backtesting results');
              this.displayService.openSnackBar('Error: could not load backtesting results');
            }
          }
        }
      );

  }

  protected generateResultsBlockContents(ofResults: BasicBacktestingResults): ResultsBlockContent[] {

    let contents: ResultsBlockContent[] = [];

    let items: ResultsBlockItem[] = [
      {name: 'Final Account Balance', unit: '$', value: this.round2(ofResults.accountBalance)},
      {name: 'Initial Balance', unit: '$', value: this.round2(ofResults.trades[0]?.accountBalanceAtOpen || 0)},
      {name: 'PnL', unit: '$', value: this.round2(ofResults.pnl)},
      {name: 'Return', unit: '%', value: this.round2(ofResults.returnPercentage)},
      {name: 'Annualized Return', unit: '%', value: this.round2(ofResults.annualizedReturnPercentage)}
    ]

    contents.push(new ResultsBlockContent(items));

    items = [
      {name: 'Trades', unit: '', value: ofResults.tradeNumber},
      {name: 'Avg. Return per Trade', unit: '%', value: this.round2(ofResults.pnl/ofResults.tradeNumber)},
      {name: 'Batting Average', unit: '%', value: this.round2(ofResults.battingAveragePercentage)},
      {name: 'Win to Loss Ratio', unit: '', value: this.round2(ofResults.winLossRatio)},
      {name: 'Profit Factor', unit: '', value: this.round2(ofResults.profitFactor)}
    ]

    contents.push(new ResultsBlockContent(items));

    items = [
      {name: 'Total Duration in days', unit: '', value: this.round2(ofResults.totalDurationInDays)},
      {name: 'Actual Trading Duration', unit: '%', value: this.round2(ofResults.actualTradingDurationPercentage)},
      {name: 'Avg. Size', unit: '(qty)', value: this.calculateAverageTradeSizeRounded(ofResults.trades)},
      {name: 'Avg. Leverage', unit: '', value: this.calculateAverageTradeLeverageRounded(ofResults.trades)},
      {name: 'Avg. Trade Duration', unit: '(hours)', value:
          this.round2(
            (ofResults.actualTradingDurationPercentage * ofResults.totalDurationInDays * 24) / (ofResults.tradeNumber * 100)
          )}
    ]

    contents.push(new ResultsBlockContent(items));

    return contents;
  }

  private round2(value: number): number {
    return Number(value.toFixed(2));
  }

  private calculateAverageTradeSizeRounded(trades: Trade[]): number {
    let size = 0;
    trades.forEach((trade: Trade) => {
      size += trade.size;
    });
    return this.round2(size / trades.length);
  }

  private calculateAverageTradeLeverageRounded(trades: Trade[]): number {
    let leverage = 0;
    trades.forEach((trade: Trade) => {
      leverage += trade.leverage;
    });
    return this.round2(leverage / trades.length);
  }
}
