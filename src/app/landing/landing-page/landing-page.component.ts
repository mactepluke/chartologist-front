import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {environment} from "../../../environments/environment";
import {AppIconComponent} from "../../core/app-icon/app-icon.component";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DisclaimerDialogComponent} from "../../disclaimer-dialog/disclaimer-dialog.component";

@Component({
  selector: 'sycm-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard,
    TitleCasePipe,
    AppIconComponent,
    MatButton
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './_landing-page.component-theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  protected readonly environment = environment;
  @Output()
  private hasLanded = new EventEmitter<boolean>();

  constructor(private router: Router, private dialog: MatDialog) {
  }

  protected onGetStared() {
    this.openDialog();
  }

  protected openDialog() {
    const dialogRef = this.dialog.open(DisclaimerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['home']).then(() => this.hasLanded.emit(true));
      } else {
        window.history.back();
      }
    });
  }

}
