import { PostViewComponent } from './post-view/post-view.component';
import { DashboardPostComponent } from './dashboard/dashboard-post/dashboard-post.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';

export const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    // loadChildren:"./dashboard/dashboard.module#DashboardModule"
    component:DashboardComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'post'
      }, {
       path:'post',
       component:DashboardPostComponent
     }
     ]
  },
  {
    path:'post/:id',
    component:PostViewComponent
  },
  {
    path:'calendar',
    component:CalendarComponent
    // loadChildren:"./calendar/calendar.module#CalendarModule"
  },
  {
path:'profile',
component:ProfileComponent
  },
  {
    path:'**',
    redirectTo:'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
