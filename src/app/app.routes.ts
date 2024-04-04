import {Routes} from '@angular/router';
import {AuthGuard} from "./auth/guards/AuthGuard";

export const routes: Routes = [
  {
    path: '', redirectTo: 'Home', pathMatch: 'full'
  },
  {
    path: 'backtesting',
    title: 'Backtesting',
    loadComponent: () => import('./backtesting/backtesting-page/backtesting-page.component').then(module => module.BacktestingPageComponent)
  },
  {
    path: 'signals',
    title: 'Signals',
    canActivate: [AuthGuard()],
    loadComponent: () => import('./signals/signals-page/signals-page.component').then(module => module.SignalsPageComponent)
  },
  {
    path: 'trading-bot',
    title: 'Trading Bot',
    canActivate: [AuthGuard()],
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
    loadComponent: () => import('./dashboard/create-account-page/create-account-page.component').then(module => module.CreateAccountPageComponent)
  },
  {
    path: 'app',
    title: 'App',
    loadComponent: () => import('./app.component').then(module => module.AppComponent)
  },
  {
    path: 'plan-purchase/:plan',
    title: 'Plan Purchase',
    canActivate: [AuthGuard()],
    loadComponent: () => import('./plan-purchase/plan-purchase.component').then(module => module.PlanPurchaseComponent)
  },
  {
    path: '**',
    title: 'Home',
    loadComponent: () => import('./home/home-page/home-page.component').then(module => module.HomePageComponent)
  }
];

