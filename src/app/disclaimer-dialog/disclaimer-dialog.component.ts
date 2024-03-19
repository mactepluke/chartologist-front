import { Component } from '@angular/core';
import {DisclaimerContentComponent} from "../disclaimer-content/disclaimer-content.component";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'sycm-disclaimer-dialog',
  standalone: true,
  imports: [
    DisclaimerContentComponent,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './disclaimer-dialog.component.html',
  styleUrl: './disclaimer-dialog.component.css'
})
export class DisclaimerDialogComponent {

}
