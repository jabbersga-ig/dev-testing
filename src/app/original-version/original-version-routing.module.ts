import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OriginalVersionComponent } from './original-version.component';
import { ChildView1Component } from './child-view1/child-view1.component';
import { ChildViewComponent } from './child-view/child-view.component';

const routes: Routes = [{ path: '', component: OriginalVersionComponent, children: [{ path: '', redirectTo: 'child-view1', pathMatch: 'full' }, { path: 'child-view1', component: ChildView1Component, data: { text: 'Child View 1' } }, { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OriginalVersionRoutingModule {
}
