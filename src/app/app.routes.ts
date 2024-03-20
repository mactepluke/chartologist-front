import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'backtesting',
    title: 'Backtesting',
    loadComponent: () => import('./backtesting/backtesting-page/backtesting-page.component').then(module => module.BacktestingPageComponent)
  },
  {
    path: 'signals',
    title: 'Signals',
    loadComponent: () => import('./signals/signals-page/signals-page.component').then(module => module.SignalsPageComponent)
  },
  {
    path: 'trading-bot',
    title: 'Trading Bot',
    loadComponent: () => import('./trading-bot/trading-bot-page/trading-bot-page.component').then(module => module.TradingBotPageComponent)
  },
  {
    path: 'pricing',
    title: 'Pricing',
    loadComponent: () => import('./pricing/pricing-page/pricing-page.component').then(module => module.PricingPageComponent)
  },
  {
    path: 'faq',
    title: 'Faq',
    loadComponent: () => import('./faq/faq-page/faq-page.component').then(module => module.FaqPageComponent)
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('./contact/contact-page/contact-page.component').then(module => module.ContactPageComponent)
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./dashboard/dashboard-page/dashboard-page.component').then(module => module.DashboardPageComponent)
  },
  {
    path: 'create-account',
    title: 'Create Account',
    loadComponent: () => import('./dashboard/create-account-panel/create-account-panel.component').then(module => module.CreateAccountPanelComponent)
  },
  {
    path: '**',
    title: 'Home',
    loadComponent: () => import('./home/home-page/home-page.component').then(module => module.HomePageComponent)
  }
];
