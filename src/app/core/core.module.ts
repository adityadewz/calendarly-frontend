import { ContinuePipe } from './../continue.pipe';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { CreatePostComponent } from './../create-post/create-post.component';
import { AppRoutingModule } from './../app-routing.module';
import { ChatModule } from './../core/chat/chat.module';
import { SidebarModule } from './../core/sidebar/sidebar.module';
import { HeaderModule } from './../core/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    ChatModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ContinuePipe],
  exports:[ 
    CommonModule,
    HeaderModule,
    SidebarModule,
    ChatModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ContinuePipe]
})
export class CoreModule { }
