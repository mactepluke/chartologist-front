import { Component } from '@angular/core';
import {DisclaimerContentComponent} from "../disclaimer-content/disclaimer-content.component";
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {OverlayContainer} from "@angular/cdk/overlay";
import {DisplayService} from "../shared_services/display.service";

@Component({
  selector: 'sycm-not-subscribed-dialog',
  standalone: true,
  imports: [
    DisclaimerContentComponent,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './not-subscribed-dialog.component.html',
  styleUrl: './not-subscribed-dialog.component.css'
})
export class NotSubscribedDialogComponent {

  constructor(
    private overlayContainer: OverlayContainer,
    private displayService: DisplayService
  ) {}

  ngOnInit(): void {
    this.displayService.getLightModeSubject().subscribe((isLightModeEnabled: boolean) => {
      this.overlayContainer.getContainerElement().classList.add(isLightModeEnabled ? 'lightMode' : 'darkMode');
    });
  }
}
