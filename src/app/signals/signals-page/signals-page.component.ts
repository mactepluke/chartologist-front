import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DualTitle, DualTitleComponent} from "../../dual-title/dual-title.component";
import {MatButton} from "@angular/material/button";
import {NotSubscribedDialogComponent} from "../../not-subcribed-dialog/not-subscribed-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {iconName} from "../../core/constants/icon-names";

@Component({
  selector: 'sycm-signals-page',
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
  templateUrl: './signals-page.component.html',
  styleUrl: './signals-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsPageComponent implements OnInit {
  protected dualTitle!: DualTitle;

  constructor(private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.dualTitle = {
      smallBlackTitle: '',
      bigColoredTitle: 'Signals',
      firstParagraph: 'Receive real-time signals for the assets and timeframes of your choice, directly in your inbox or by SMS.',
      secondParagraph: 'Let\'s configure you signals schedule step by step.',
      icon: iconName.signals
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
