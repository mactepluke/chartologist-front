import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import {LandingPageComponent} from "./landing/landing-page/landing-page.component";

@Component({
  selector: 'sycm-root',
  standalone: true,
  imports: [RouterOutlet, NavigationMenuComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected hasLanded = false;

  constructor() {
  }

  setHasLanded($event: boolean) {
    this.hasLanded = $event;
  }
}
