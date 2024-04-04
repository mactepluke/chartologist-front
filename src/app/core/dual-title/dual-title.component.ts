import {booleanAttribute, Component, Input} from '@angular/core';

export interface DualTitle {
  smallBlackText: string;
  bigOrangeText: string;
  firstParagraph: string;
  secondParagraph: string;
}


@Component({
  selector: 'sycm-dual-title',
  standalone: true,
  imports: [],
  templateUrl: './dual-title.component.html',
  styleUrl: './dual-title.component.css'
})

export class DualTitleComponent {
  @Input()
  dualTitle!: DualTitle;
  @Input({transform: booleanAttribute})
  swapTitles: boolean = false;
}
