import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AsyncPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router, RouterOutlet} from "@angular/router";
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
    UpperCasePipe,
    TitleCasePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuComponent implements OnInit {
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
    console.log('Navigating to ' + page);
    this.router.navigate([page]);
  }

  isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }

}
