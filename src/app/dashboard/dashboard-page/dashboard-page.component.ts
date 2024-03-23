import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {LoginPanelComponent} from "../login-panel/login-panel.component";
import {DashboardPanelComponent} from "../dashboard-panel/dashboard-panel.component";

@Component({
  selector: 'sycm-dashboard-page',
  standalone: true,
  imports: [
    LoginPanelComponent,
    DashboardPanelComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {
  isLoggedIn!: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }


  setLoginStatus($event: boolean) {
    this.isLoggedIn = $event;
  }
}
