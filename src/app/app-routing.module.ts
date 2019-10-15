import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ViewComponent, pathMatch: 'full' },
  { path: 'view', component: ViewComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
