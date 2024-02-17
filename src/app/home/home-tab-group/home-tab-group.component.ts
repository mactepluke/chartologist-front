import {Component} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'sycm-home-tab-group',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab
  ],
  templateUrl: './home-tab-group.component.html',
  styleUrl: './home-tab-group.component.css'
})
export class HomeTabGroupComponent {

}
