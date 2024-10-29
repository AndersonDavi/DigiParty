import { Routes } from '@angular/router';
import { HomeComponent } from './landing/pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
