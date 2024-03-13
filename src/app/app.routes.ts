import {Routes} from '@angular/router';
import {environment} from "../environments/environment";

export const routes: Routes = [
  {
    path: '', redirectTo: `${environment.app_name}`, pathMatch: 'full'
  },
  {
    path: `${environment.app_name}/home`, redirectTo: `${environment.app_name}`, pathMatch: 'full'
  },
  {
    path: `${environment.app_name}/backtesting`,
    title: 'Backtesting',
    loadComponent: () => import('./backtesting/backtesting-page/backtesting-page.component').then(module => module.BacktestingPageComponent)
  },
  {
    path: `${environment.app_name}/signals`,
    title: 'Signals',
    loadComponent: () => import('./signals/signals-page/signals-page.component').then(module => module.SignalsPageComponent)
  },
  {
    path: `${environment.app_name}/trading-bot`,
    title: 'Trading Bot',
    loadComponent: () => import('./trading-bot/trading-bot-page/trading-bot-page.component').then(module => module.TradingBotPageComponent)
  },
  {
    path: `${environment.app_name}/pricing`,
    title: 'Pricing',
    loadComponent: () => import('./pricing/pricing-page/pricing-page.component').then(module => module.PricingPageComponent)
  },
  {
    path: `${environment.app_name}/faq`,
    title: 'Faq',
    loadComponent: () => import('./faq/faq-page/faq-page.component').then(module => module.FaqPageComponent)
  },
  {
    path: `${environment.app_name}/contact`,
    title: 'Contact',
    loadComponent: () => import('./contact/contact-page/contact-page.component').then(module => module.ContactPageComponent)
  },
  {
    path: '**',
    title: `${environment.app_name}`,
    loadComponent: () => import('./home/home-page/home-page.component').then(module => module.HomePageComponent)
  }
];
