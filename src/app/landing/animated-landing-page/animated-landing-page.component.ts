import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DisclaimerDialogComponent} from "../../disclaimer-dialog/disclaimer-dialog.component";
import {environment} from "../../../environments/environment";
import {AppIconComponent} from "../../core/app-icon/app-icon.component";
import {MatButton} from "@angular/material/button";
import {TitleCasePipe} from "@angular/common";
import {AnimatedSphereComponent} from "../../animated-sphere/animated-sphere.component";


@Component({
  selector: 'sycm-animated-landing-page',
  standalone: true,
  imports: [
    AppIconComponent,
    MatButton,
    TitleCasePipe,
    AnimatedSphereComponent
  ],
  templateUrl: './animated-landing-page.component.html',
  styleUrl: './animated-landing-page.component.scss'
})
export class AnimatedLandingPageComponent {
  protected readonly environment = environment;
  @Output()
  private hasLanded : EventEmitter<boolean> = new EventEmitter<boolean>();

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
