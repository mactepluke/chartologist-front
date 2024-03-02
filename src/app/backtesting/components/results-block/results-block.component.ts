import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {UpperCasePipe} from "@angular/common";
import {ResultsBlockItem} from "../../models/ResultsBlockItem";
import {ResultsBlockContent} from "../../models/ResultsBlockContent";
import {MatIcon} from "@angular/material/icon";

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
  styleUrl: './results-block.component.css'
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
