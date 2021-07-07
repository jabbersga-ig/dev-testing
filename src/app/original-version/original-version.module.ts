import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OriginalVersionRoutingModule } from './original-version-routing.module';
import { OriginalVersionComponent } from './original-version.component';
import { ChildView1Component } from './child-view1/child-view1.component';
import { IgxCardModule, IgxButtonModule, IgxIconModule, IgxGridModule, IgxAvatarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    OriginalVersionComponent,
    ChildView1Component,
    ChildViewComponent
  ],
  imports: [
    CommonModule,
    OriginalVersionRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule,
    IgxGridModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule
  ]
})
export class OriginalVersionModule {
}
