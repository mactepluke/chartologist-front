import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DualTitle, DualTitleComponent} from "../../core/dual-title/dual-title.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'sycm-trading-bot-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    DualTitleComponent,
    MatButton
  ],
  templateUrl: './trading-bot-page.component.html',
  styleUrl: './trading-bot-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingBotPageComponent implements OnInit  {
  protected dualTitle!: DualTitle;

  ngOnInit(): void {
    this.dualTitle = {
      smallBlackText: '',
      bigOrangeText: 'Automation',
      firstParagraph: 'First you need to connect to your exchange account.',
      secondParagraph: 'Upon authorizing Chartogist to trade on your behalf, you will be able to create and run trading strategies.'
    };
  }


}
