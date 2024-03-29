import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: 'in-app', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'in-app', loadChildren: () => import('./in-app/in-app.module').then(m => m.InAppModule) },
  { path: 'original-version', loadChildren: () => import('./original-version/original-version.module').then(m => m.OriginalVersionModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
