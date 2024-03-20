import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HttpClient, HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {DatePipe} from "@angular/common";
import {authInterceptor} from "./auth/interceptors/authInterceptor";
import {AuthService} from "./auth/services/auth.service";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {DisplayService} from "./shared_services/display.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()), provideAnimationsAsync(),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, HttpClient, HttpClientModule),
    DatePipe,
    provideHttpClient(
      withInterceptors([authInterceptor]),
    ),
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    AuthService,
    DisplayService
  ]
};
