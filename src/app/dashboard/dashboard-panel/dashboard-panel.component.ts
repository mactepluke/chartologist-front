import {Component, EventEmitter, Output} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../auth/services/auth.service";
import {DisplayService} from "../../shared_services/display.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'sycm-dashboard-panel',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    ReactiveFormsModule,
    MatSlideToggle
  ],
  templateUrl: './dashboard-panel.component.html',
  styleUrl: './dashboard-panel.component.css'
})
export class DashboardPanelComponent {
  @Output()
  isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>

  formGroup = this.formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });


  constructor(private authService: AuthService, private displayService: DisplayService, private formBuilder: FormBuilder) {
  }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  onLogout(): void {
    this.authService.logout();
    this.isLoggedIn.emit(this.authService.isLoggedIn())
    this.displayService.refreshPage();
  }

  onEnableLightMode() {
    if (this.displayService.isLightModeEnabled()) {
      this.displayService.disableLightMode();
    } else {
      this.displayService.enableLightMode();
    }
  }
}
