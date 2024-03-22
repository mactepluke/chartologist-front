import {ChangeDetectionStrategy, Component, inject, Inject} from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef
} from "@angular/material/snack-bar";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'sycm-snack-bar',
  standalone: true,
  imports: [
    MatSnackBarLabel,
    MatSnackBarActions,
    MatButton,
    MatSnackBarAction,
    MatIcon
  ],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarComponent {
  snackBarRef: MatSnackBarRef<any> = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
}
