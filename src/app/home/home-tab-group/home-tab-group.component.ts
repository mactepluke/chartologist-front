import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {AboutTabComponent} from "../about-tab/about-tab.component";
import {FeaturesTabComponent} from "../features-tab/features-tab.component";
import {DisclaimerTabComponent} from "../disclaimer-tab/disclaimer-tab.component";
import {FaqPageComponent} from "../../faq/faq-page/faq-page.component";

@Component({
  selector: 'sycm-home-tab-group',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    AboutTabComponent,
    FeaturesTabComponent,
    DisclaimerTabComponent,
    FaqPageComponent
  ],
  templateUrl: './home-tab-group.component.html',
  styleUrl: './home-tab-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTabGroupComponent {

}
