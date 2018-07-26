import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShellComponent } from './components/shell/shell.component';
import { WelcomeComponent } from './components/welcome/welcome.component';



const appRoutes: Routes = [
    {
      path: '',
      component: ShellComponent,
      children: [
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'products',
          // canActivate: [AuthGuard],
          loadChildren: './products/product.module#ProductModule'
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      ]
    },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);