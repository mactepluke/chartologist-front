import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Injectable()
export class DisplayService {
  private enableLightMode : boolean = false;

  constructor(private snackBar: MatSnackBar) {
  }

  toggleTheme(): void {
    this.enableLightMode = !this.enableLightMode;
  }

  isLightModeEnabled(): boolean {
    return this.enableLightMode;
  }

  refreshPage(): void {
    window.location.reload();
  }

  openSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data: message
    });
  }
}
