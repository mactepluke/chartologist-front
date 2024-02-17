import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'sycm-home-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
