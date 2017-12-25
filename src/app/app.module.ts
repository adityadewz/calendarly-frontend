import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { ProfileModule } from './profile/profile.module';
import { CoreModule } from './core/core.module';
import { EventsService } from './events.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { CalendarModule } from './calendar/calendar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PostViewComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    DashboardModule,
    CoreModule,
    ProfileModule,
    FroalaEditorModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
