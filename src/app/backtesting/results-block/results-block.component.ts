import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {UpperCasePipe} from "@angular/common";
import {ResultsBlockContent} from "../backtesting-page/ResultsBlockContent";
import {MatIcon} from "@angular/material/icon";

export interface ResultsBlockItem {
  name: string;
  unit: string;
  value: number | string | Date | undefined;
}

@Component({
  selector: 'sycm-results-block',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatDivider,
    UpperCasePipe,
    MatIcon
  ],
  templateUrl: './results-block.component.html',
  styleUrl: './results-block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ResultsBlockComponent {
  @Input()
  content!: ResultsBlockContent;

  protected getFollowingItems(): ResultsBlockItem[] | [] {
    if (this.content.items.length <= 1) {
      return [];
    }
    return this.content.items.slice(1);
  }
}
