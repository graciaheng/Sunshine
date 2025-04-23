import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gratitude',
    loadComponent: () => import('./gratitude/gratitude.page').then( m => m.GratitudePage)
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.page').then( m => m.HistoryPage)
  },
  {
    path: 'mood-checker',
    loadComponent: () => import('./mood-checker/mood-checker.page').then( m => m.MoodCheckerPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'sleep-helper',
    loadComponent: () => import('./sleep-helper/sleep-helper.page').then( m => m.SleepHelperPage)
  },
];
