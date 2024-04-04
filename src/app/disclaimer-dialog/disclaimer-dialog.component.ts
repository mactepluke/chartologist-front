import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DisclaimerContentComponent} from "../disclaimer-content/disclaimer-content.component";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {OverlayContainer} from "@angular/cdk/overlay";
import {DisplayService} from "../shared_services/display.service";

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
  styleUrl: './disclaimer-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisclaimerDialogComponent implements OnInit {
  agreeButtonEnabled: boolean = true;

  constructor(
    private overlayContainer: OverlayContainer,
    private displayService: DisplayService,
    private dialogRef: MatDialogRef<DisclaimerDialogComponent>
  ) {}

  ngOnInit(): void {
    this.displayService.getLightModeSubject().subscribe((isLightModeEnabled: boolean) => {
      this.overlayContainer.getContainerElement().classList.add(isLightModeEnabled ? 'lightMode' : 'darkMode');
    });
  }

  onScroll(event: Event): void {
    const content = event.target as HTMLElement;
    this.agreeButtonEnabled = content.scrollHeight - content.clientHeight <= content.scrollTop;
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  onAgree(): void {
    this.dialogRef.close(true);
  }


}
