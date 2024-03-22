import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'sycm-about-tab',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTabComponent {

}
