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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    DashboardModule,
    CoreModule,
    ProfileModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
