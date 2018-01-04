import { LayoutComponent } from './layout/layout.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { DashboardPostComponent } from './dashboard/dashboard-post/dashboard-post.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';

export const appRoutes: Routes = [
     {
  path:'',
  redirectTo:'calendar',
  pathMatch:'full'
    },
  {
    path:'',
    children:[
      {
        path:'',
        component:LayoutComponent,
        children:[
  {
    path:'post/:id',
    component:PostViewComponent
  },
  {
    path:'calendar',
    component:CalendarComponent
  },
    {
  path:'profile',
  component:ProfileComponent
    }
        ]
      }
    ]
  },
  {
    path:'**',
    redirectTo:'calendar'
  }
  // {
  //   path:'',
  //   redirectTo:'calendar',
  //   pathMatch:'full'
  // },
  // {
  //   path:'post/:id',
  //   component:PostViewComponent
  // },
  // {
  //   path:'calendar',
  //   component:CalendarComponent
  // },
  //   {
  // path:'profile',
  // component:ProfileComponent
  //   },
  // {
  //   path:'**',
  //   redirectTo:'calendar'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
