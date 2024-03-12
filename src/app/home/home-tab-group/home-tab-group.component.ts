import {Component} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {TabItemComponent} from "../tab-item/tab-item.component";
import {AboutTabComponent} from "../about-tab/about-tab.component";
import {FeaturesTabComponent} from "../features-tab/features-tab.component";
import {DisclaimerTabComponent} from "../disclaimer-tab/disclaimer-tab.component";

@Component({
  selector: 'sycm-home-tab-group',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    TabItemComponent,
    AboutTabComponent,
    FeaturesTabComponent,
    DisclaimerTabComponent
  ],
  templateUrl: './home-tab-group.component.html',
  styleUrl: './home-tab-group.component.css'
})
export class HomeTabGroupComponent {

}
