import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import {LandingPageComponent} from "./landing/landing-page/landing-page.component";
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'sycm-root',
  standalone: true,
  imports: [RouterOutlet, NavigationMenuComponent, LandingPageComponent],
  providers: [
    AuthService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  protected hasLanded = false;
  protected isLoggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.hasLanded = this.isLoggedIn;
  }

  setHasLanded($event: boolean) {
    this.hasLanded = $event;
  }
}
