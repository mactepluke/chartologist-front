import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'sycm-disclaimer-tab',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './disclaimer-tab.component.html',
  styleUrl: './disclaimer-tab.component.css'
})
export class DisclaimerTabComponent {

}
