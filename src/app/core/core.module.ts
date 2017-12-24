import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { CreatePostComponent } from './../create-post/create-post.component';
import { AppRoutingModule } from './../app-routing.module';
import { ChatModule } from './../chat/chat.module';
import { SidebarModule } from './../sidebar/sidebar.module';
import { HeaderModule } from './../header/header.module';
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
  declarations: [],
  exports:[ 
    HeaderModule,
    SidebarModule,
    ChatModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule]
})
export class CoreModule { }
