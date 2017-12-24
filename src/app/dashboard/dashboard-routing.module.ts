import { DashboardPostComponent } from './dashboard-post/dashboard-post.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[{
      path:'',
      component:DashboardComponent,
      children:[
        {
          path:'post',
          component:DashboardPostComponent
        }]
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
