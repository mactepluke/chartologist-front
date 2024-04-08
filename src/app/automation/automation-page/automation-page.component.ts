import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DualTitle, DualTitleComponent} from "../../dual-title/dual-title.component";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {NotSubscribedDialogComponent} from "../../not-subcribed-dialog/not-subscribed-dialog.component";
import {Router} from "@angular/router";
import {iconName} from "../../core/constants/icon-names";

@Component({
  selector: 'sycm-automation-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    DualTitleComponent,
    MatButton
  ],
  templateUrl: './automation-page.component.html',
  styleUrl: './automation-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutomationPageComponent implements OnInit  {
  protected dualTitle!: DualTitle;

  constructor(private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.dualTitle = {
      smallBlackTitle: '',
      bigColoredTitle: 'Automation',
      firstParagraph: 'First you need to connect to your exchange account.',
      secondParagraph: 'Upon authorizing Chartogist to trade on your behalf, you will be able to create and run trading strategies.',
      icon: iconName.automation
    };
  }

  protected onStart() {
    this.openDialog();
  }

  private openDialog() {
    const dialogRef = this.dialog.open(NotSubscribedDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['pricing']);
    });
  }
}
