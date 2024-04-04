import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {DualTitle, DualTitleComponent} from "../../dual-title/dual-title.component";

@Component({
  selector: 'sycm-faq-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    DualTitleComponent
  ],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqPageComponent implements OnInit {
  protected dualTitle!: DualTitle;

  ngOnInit(): void {
    this.dualTitle = {
      smallBlackText: 'Frequently Asked',
      bigOrangeText: 'Questions',
      firstParagraph: '',
      secondParagraph: '',
    };
  }
}
