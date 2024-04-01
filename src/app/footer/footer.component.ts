import { Component } from '@angular/core';
import {CustomIconComponent} from "../core/custom-icon/custom-icon.component";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {DisclaimerDialogComponent} from "../disclaimer-dialog/disclaimer-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../auth/services/auth.service";

@Component({
  selector: 'sycm-footer',
  standalone: true,
  imports: [
    CustomIconComponent,
    MatButton
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router, private dialog: MatDialog, private authService: AuthService) {
  }

  protected onSelectPage(page: string) {
    console.log('Navigating to page: ' + page);
    this.router.navigate([page]);
  }

  protected onDisclaimer() {
    this.openDialog();
  }

  protected openDialog() {
    const dialogRef = this.dialog.open(DisclaimerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      } else {
        this.authService.logout();
        window.location.reload();
      }
    });
  }
}
