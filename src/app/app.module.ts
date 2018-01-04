import { LayoutModule } from './layout/layout.module';
import { EventsService } from './events.service';
import { CalendarModule } from './calendar/calendar.module';
import { PostModule } from './post/post.module';
import { ProfileModule } from './profile/profile.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    PostModule,
    CoreModule,
    ProfileModule,
    LayoutModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
