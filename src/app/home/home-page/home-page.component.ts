import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {HomeTabGroupComponent} from "../home-tab-group/home-tab-group.component";

@Component({
  selector: 'sycm-home-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard,
    HomeTabGroupComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

}
