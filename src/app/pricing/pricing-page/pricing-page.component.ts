import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {CustomIconComponent} from "../../core/custom-icon/custom-icon.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'sycm-pricing-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardImage,
    CustomIconComponent,
    MatButton
  ],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingPageComponent {

}
