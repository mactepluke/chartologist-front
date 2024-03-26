import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {BehaviorSubject} from "rxjs";


@Injectable()
export class DisplayService {
  /*This is important it is not just a subject, otherwise the first value it has is not read by the app component
  even if the constructor initializes it with .next(someValue).
  This is because value from subject only trigger the subscription when new values are emitted.*/
  private readonly lightModeEnabled$: BehaviorSubject<boolean>;

  constructor(private snackBar: MatSnackBar) {
    this.lightModeEnabled$ = new BehaviorSubject<boolean>(this.isLightModeEnabled());
  }

  enableLightMode(): void {
    localStorage.setItem('lightMode', 'true');
    this.lightModeEnabled$.next(true);
  }

  disableLightMode(): void {
    localStorage.setItem('lightMode', 'false');
    this.lightModeEnabled$.next(false);
  }

  isLightModeEnabled(): boolean {
    return localStorage.getItem('lightMode') === 'true'
  }

  getLightModeSubject(): BehaviorSubject<boolean> {
    return this.lightModeEnabled$;
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
