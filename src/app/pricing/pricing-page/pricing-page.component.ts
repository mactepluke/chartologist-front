import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'sycm-pricing-page',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export class PricingPageComponent {

}
