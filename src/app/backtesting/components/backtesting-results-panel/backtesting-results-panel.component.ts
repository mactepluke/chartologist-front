import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {ResultsBlockComponent} from "../results-block/results-block.component";

@Component({
  selector: 'sycm-backtesting-results-panel',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    ResultsBlockComponent
  ],
  templateUrl: './backtesting-results-panel.component.html',
  styleUrl: './backtesting-results-panel.component.css'
})
export class BacktestingResultsPanelComponent {

}
