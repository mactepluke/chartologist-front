import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import {LandingPageComponent} from "./landing/landing-page/landing-page.component";
import {AuthService} from "./auth/services/auth.service";
import {DisplayService} from "./shared_services/display.service";

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

  constructor(private authService: AuthService, private displayService: DisplayService) {
  }

  @HostBinding('class')
  className!: string;

  ngOnInit(): void {
    this.className = this.displayService.isLightModeEnabled() ? 'lightMode' : 'darkMode';
    this.isLoggedIn = this.authService.isLoggedIn();
    this.hasLanded = this.isLoggedIn;
  }

  setHasLanded($event: boolean) {
    this.hasLanded = $event;
  }
}
