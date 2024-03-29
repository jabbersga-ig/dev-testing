import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InAppRoutingModule } from './in-app-routing.module';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxButtonModule, IgxCardModule, IgxIconModule, IgxGridModule, IgxAvatarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    InAppComponent,
    DashboardComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    InAppRoutingModule,
    IgxButtonModule,
    IgxCardModule,
    IgxIconModule,
    IgxGridModule,
    FormsModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule
  ]
})
export class InAppModule {
}
