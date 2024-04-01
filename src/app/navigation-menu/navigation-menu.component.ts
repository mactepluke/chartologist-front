import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AsyncPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router, RouterOutlet} from "@angular/router";
import {AppIconComponent} from "../core/app-icon/app-icon.component";
import {environment} from "../../environments/environment";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {DisplayService} from "../shared_services/display.service";
import {AuthService} from "../auth/services/auth.service";
import {CustomIconComponent} from "../core/custom-icon/custom-icon.component";
import {iconName} from "../core/constants/icon-names";

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
        UpperCasePipe,
        TitleCasePipe,
        MatSlideToggle,
        CustomIconComponent
    ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuComponent implements OnInit {
  protected readonly environment = environment;
  protected readonly iconScale = 1;
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  protected handsetState!: boolean;
  isLightModeEnabled!: boolean;
  isLoggedInSubject$!: BehaviorSubject<boolean>;

  constructor(private router: Router, private displayService: DisplayService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.handsetState = this.isHandset();
    this.isLightModeEnabled = this.displayService.isLightModeEnabled();
    this.isLoggedInSubject$ = this.authService.getIsLoggedInSubject();
  }

  protected onSelectPage(page: string) {
    this.router.navigate([page]);
  }

  isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }

    onEnableLightMode() {
      if (this.isLightModeEnabled) {
        this.displayService.disableLightMode();
        this.isLightModeEnabled = false;
      } else {
        this.displayService.enableLightMode();
        this.isLightModeEnabled = true;
      }

  }

  protected readonly iconName = iconName;
}
