import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DualTitle, DualTitleComponent} from "../../core/dual-title/dual-title.component";

@Component({
  selector: 'sycm-signals-page',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        DualTitleComponent
    ],
  templateUrl: './signals-page.component.html',
  styleUrl: './signals-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsPageComponent implements OnInit {
  protected dualTitle!: DualTitle;

  ngOnInit(): void {
    this.dualTitle = {
      smallBlackText: '',
      bigOrangeText: 'Signals',
      firstParagraph: '',
      secondParagraph: ''
    };
  }



}
