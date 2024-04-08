import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {
  BacktestingSettings,
  BacktestingSettingsPanelComponent
} from "../backtesting-settings-panel/backtesting-settings-panel.component";
import {ResultsBlockComponent, ResultsBlockItem} from "../results-block/results-block.component";
import {ResultsBlockContent} from "./ResultsBlockContent";
import {NgForOf} from "@angular/common";
import {BacktestingService} from "../services/backtesting.service";
import {Trade} from "../../core/models/Trade";
import {MatProgressBar} from "@angular/material/progress-bar";
import {DisplayService} from "../../shared_services/display.service";
import {timeout} from "rxjs";
import {DualTitle, DualTitleComponent} from "../../dual-title/dual-title.component";
import {CustomIconComponent} from "../../core/custom-icon/custom-icon.component";
import {iconName} from "../../core/constants/icon-names";

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

@Component({
  selector: 'sycm-backtesting-page',
  standalone: true,
    imports: [
        BacktestingSettingsPanelComponent,
        ResultsBlockComponent,
        NgForOf,
        MatProgressBar,
        DualTitleComponent,
        CustomIconComponent
    ],
  providers: [
    BacktestingService
  ],
  templateUrl: './backtesting-page.component.html',
  styleUrl: './backtesting-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BacktestingPageComponent implements OnInit {
  contents: ResultsBlockContent[] = [];
  displayResultsBlocks = false;
  serverIsBusy = false;
  dualTitle!: DualTitle;

  constructor(private backtestingService: BacktestingService,
              private displayService: DisplayService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.dualTitle = {
      smallBlackTitle: '',
      bigColoredTitle: 'Backtesting',
      firstParagraph: 'Enter your settings and run the trading simulation.',
      secondParagraph: 'Only a limited assets and timeframes are available at this time, but more will be added soon.' +
        'The date range is limited to the 26th of August 2023 to the 15th of February 2024 (see FAQ to learn why).',
      icon: iconName.backtesting
    };

  }

  launchBackTesting($settings: BacktestingSettings) {
    this.displayResultsBlocks = false;

    if (!this.serverIsBusy)
    {
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
              this.displayService.openSnackBar('Backtesting finished');
              this.cdr.detectChanges()
            },
            error: (error) => {
              if (error.name === 'TimeoutError') {
                this.serverIsBusy = false;
                console.log('Request has timed out.');
                this.displayService.openSnackBar('Error: Request has timed out.');
                this.cdr.detectChanges()
              } else {
                this.serverIsBusy = false;
                console.log('Error: could not load backtesting results');
                this.displayService.openSnackBar('Error: could not load backtesting results');
                this.cdr.detectChanges()
              }
            }
          }
        );
    }

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
      {name: 'Avg. Return per Trade', unit: '%', value: this.round2(ofResults.pnl / ofResults.tradeNumber)},
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
      {
        name: 'Avg. Trade Duration', unit: '(hours)', value:
          this.round2(
            (ofResults.actualTradingDurationPercentage * ofResults.totalDurationInDays * 24) / (ofResults.tradeNumber * 100)
          )
      }
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

  protected readonly iconName = iconName;
}
