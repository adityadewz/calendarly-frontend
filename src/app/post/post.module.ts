import { CoreModule } from './../core/core.module';
import { PostViewComponent } from './post-view/post-view.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [CreatePostComponent,PostViewComponent],
  exports:[CreatePostComponent]
})
export class PostModule { }
