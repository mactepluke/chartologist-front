import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'sycm-backtesting-results-panel',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './backtesting-results-panel.component.html',
  styleUrl: './backtesting-results-panel.component.css'
})
export class BacktestingResultsPanelComponent {

}
