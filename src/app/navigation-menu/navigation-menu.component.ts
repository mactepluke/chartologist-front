import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AsyncPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppIconComponent} from "../core/app-icon/app-icon.component";
import {environment} from "../../environments/environment";

@Component({
  selector: 'sycm-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    AppIconComponent,
    RouterLinkActive,
    RouterLink,
    UpperCasePipe,
    TitleCasePipe,
  ]
})
export class NavigationMenuComponent {
  protected pages = ['home', 'backtesting', 'signals', 'trading-bot', 'pricing', 'disclaimer', 'faq', 'contact'];
  protected selectedPage = this.pages[0];
  protected readonly environment = environment;
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router) {
  }

  protected onSelectPage(page: string) {
    this.selectedPage = page;
    this.router.navigate([`${environment.app_name}/${page}`]);
  }

}
