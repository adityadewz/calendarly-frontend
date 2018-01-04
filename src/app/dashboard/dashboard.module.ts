// import { CreatePostComponent } from '../create-post/create-post.component';
import { RouterModule } from '@angular/router';
import { DashboardPostComponent } from './dashboard-post/dashboard-post.component';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule
  ],
  declarations: [DashboardComponent,DashboardPostComponent]
})
export class DashboardModule { }
