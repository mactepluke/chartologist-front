import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'sycm-faq-page',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqPageComponent {

}
