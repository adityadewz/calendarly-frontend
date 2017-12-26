import { CalendarService } from './calendar/calendar.service';
import { CalendarComponent } from './calendar/calendar.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { ProfileModule } from './profile/profile.module';
import { CoreModule } from './core/core.module';
import { EventsService } from './events.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ContinuePipe } from './continue.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostViewComponent,
    CreatePostComponent,
    CalendarComponent,
    ContinuePipe
  ],
  imports: [
    BrowserModule,
    // CalendarModule,
    CoreModule,
    ProfileModule,
    FroalaEditorModule
  ],
  providers: [EventsService,CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
