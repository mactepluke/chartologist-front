import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DisclaimerContentComponent} from "../../disclaimer-content/disclaimer-content.component";

@Component({
  selector: 'sycm-disclaimer-tab',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    DisclaimerContentComponent
  ],
  templateUrl: './disclaimer-tab.component.html',
  styleUrl: './disclaimer-tab.component.css'
})
export class DisclaimerTabComponent {

}
