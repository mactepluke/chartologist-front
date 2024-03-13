import {Component, inject, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
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
export class NavigationMenuComponent implements OnInit {
  protected pages = ['home', 'backtesting', 'signals', 'trading-bot', 'pricing', 'login', 'faq', 'contact'];
  protected selectedPage = this.pages[0];
  protected readonly environment = environment;
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  protected handsetState!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
        this.handsetState = this.isHandset();
    }

  protected onSelectPage(page: string) {
    this.selectedPage = page;
    //TODO Remove the if statement when login is implemented
    if (this.selectedPage === 'login') {
      this.selectedPage = 'home';
    }
    this.router.navigate([`${environment.app_name}/${this.selectedPage}`]);
  }

  isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }

}
