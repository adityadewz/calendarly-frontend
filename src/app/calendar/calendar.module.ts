import { CreatePostComponent } from './../create-post/create-post.component';
import { RouterModule } from '@angular/router';
import { CalendarService } from './calendar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CalendarRoutingModule } from './calendar-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule
  ],
  declarations: [CalendarComponent],
  providers:[CalendarService]
})
export class CalendarModule { }
