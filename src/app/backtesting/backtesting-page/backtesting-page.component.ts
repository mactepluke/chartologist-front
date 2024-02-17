import {Component} from '@angular/core';
import {BacktestingSettingsPanelComponent} from "../backtesting-settings-panel/backtesting-settings-panel.component";
import {BacktestingResultsPanelComponent} from "../backtesting-results-panel/backtesting-results-panel.component";

@Component({
  selector: 'sycm-backtesting-page',
  standalone: true,
  imports: [
    BacktestingSettingsPanelComponent,
    BacktestingResultsPanelComponent
  ],
  templateUrl: './backtesting-page.component.html',
  styleUrl: './backtesting-page.component.css'
})
export class BacktestingPageComponent {

}
