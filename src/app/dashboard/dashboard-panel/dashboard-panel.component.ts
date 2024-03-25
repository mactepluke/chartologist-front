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
        MatButton
    ],
    providers: [
        AuthService,
      DisplayService
    ],
    templateUrl: './dashboard-panel.component.html',
    styleUrl: './dashboard-panel.component.css'
})
export class DashboardPanelComponent {
  @Output()
  isLoggedIn : EventEmitter<boolean> = new EventEmitter<boolean>

    constructor(private authService: AuthService, private displayService: DisplayService) {
    }

    onLogout(): void {
        this.authService.logout();
        this.isLoggedIn.emit(this.authService.isLoggedIn())
        this.displayService.refreshPage();
    }
}
