import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DualTitle, DualTitleComponent} from "../../dual-title/dual-title.component";
import {CustomIconComponent} from "../../core/custom-icon/custom-icon.component";

@Component({
  selector: 'sycm-contact-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    DualTitleComponent,
    CustomIconComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent implements OnInit {
  protected dualTitle!: DualTitle;

  ngOnInit(): void {
    this.dualTitle = {
      smallBlackTitle: '',
      bigColoredTitle: 'Contact',
      firstParagraph: '',
      secondParagraph: '',
    };
  }
}
