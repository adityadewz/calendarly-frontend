import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


// const appRoutes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'calendar', component:CalendarComponent},
//   {
//       path:'**',
//       redirectTo: 'dashboard'
//   }
// //   { path: 'shopping-list', component: ShoppingListComponent }
// ];

const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'calendar',
    component:CalendarComponent
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
