import { Component } from '@angular/core';
import {CustomIconComponent} from "../core/custom-icon/custom-icon.component";

@Component({
  selector: 'sycm-footer',
  standalone: true,
  imports: [
    CustomIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
