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
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppIconComponent} from "../app-icon/app-icon.component";
import {environment} from "../../../environments/environment";

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
  protected home_page_path = `${environment.app_name}`;
  protected backtesting_page_path = `${environment.app_name}/backtesting`;
  protected signals_page_path = `${environment.app_name}/signals`;
  protected trading_bot_page_path = `${environment.app_name}/trading-bot`;
  protected pricing_page_path = `${environment.app_name}/pricing`;
  protected disclaimer_page_path = `${environment.app_name}/disclaimer`;
  protected faq_page_path = `${environment.app_name}/faq`;
  protected contact_page_path = `${environment.app_name}/contact`;
  protected readonly environment = environment;
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
