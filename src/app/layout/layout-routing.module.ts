import { ProfileComponent } from './../profile/profile.component';
import { CalendarComponent } from './../calendar/calendar.component';
import { PostViewComponent } from './../post/post-view/post-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
      redirectTo:'calendar',
      pathMatch:'full'
    },
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
      },
    {
      path:'**',
      redirectTo:'calendar'
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
