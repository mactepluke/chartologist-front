import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
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
import {DualTitle, DualTitleComponent} from "../../dual-title/dual-title.component";

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
    MatButton,
    DualTitleComponent
  ],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingPageComponent implements OnInit {
  protected dualTitle!: DualTitle;


  ngOnInit(): void {
    this.dualTitle = {
      smallBlackText: 'And catch the market before it moves.',
      bigOrangeText: 'Choose your plan',
      firstParagraph: '',
      secondParagraph: '',
    };
  }

}
