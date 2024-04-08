import {booleanAttribute, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BigColoredTitleComponent} from "./big-colored-title/big-colored-title.component";

export interface DualTitle {
  smallBlackTitle?: string;
  bigColoredTitle?: string;
  firstParagraph?: string;
  secondParagraph?: string;
  icon?: string;
}


@Component({
  selector: 'sycm-dual-title',
  standalone: true,
  imports: [
    BigColoredTitleComponent
  ],
  templateUrl: './dual-title.component.html',
  styleUrl: './dual-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DualTitleComponent implements OnInit {
  @Input()
  dualTitle!: DualTitle;
  @Input({transform: booleanAttribute})
  swapTitles: boolean = false;

  ngOnInit(): void {
    if (!this.dualTitle.smallBlackTitle) {
      this.dualTitle.smallBlackTitle = '';
    }
    if (!this.dualTitle.bigColoredTitle) {
      this.dualTitle.bigColoredTitle = '';
    }
    if (!this.dualTitle.firstParagraph) {
      this.dualTitle.firstParagraph = '';
    }
    if (!this.dualTitle.secondParagraph) {
      this.dualTitle.secondParagraph = '';
    }
    if (!this.dualTitle.icon) {
      this.dualTitle.icon = '';
    }
  }
}
