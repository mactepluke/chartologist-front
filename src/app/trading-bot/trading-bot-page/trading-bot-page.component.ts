import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'sycm-trading-bot-page',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './trading-bot-page.component.html',
  styleUrl: './trading-bot-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingBotPageComponent {

}
