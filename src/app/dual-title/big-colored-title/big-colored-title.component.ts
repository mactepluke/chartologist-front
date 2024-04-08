import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CustomIconComponent} from "../../core/custom-icon/custom-icon.component";

@Component({
  selector: 'sycm-big-colored-title',
  standalone: true,
  imports: [
    CustomIconComponent
  ],
  templateUrl: './big-colored-title.component.html',
  styleUrl: './big-colored-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigColoredTitleComponent implements OnInit {
  @Input()
  bigColoredTitle!: string | undefined;
  @Input()
  icon!: string | undefined;

  ngOnInit(): void {
    if (!this.bigColoredTitle) {
      this.bigColoredTitle = '';
    }
    if (!this.icon) {
      this.icon = '';
    }
  }



}
