import { PostModule } from './../post/post.module';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { CalendarService } from './calendar.service';
import { CalendarComponent } from './calendar.component';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CoreModule,
    PostModule
  ],
  declarations: [CalendarComponent],

  providers:[CalendarService]
})
export class CalendarModule { }
