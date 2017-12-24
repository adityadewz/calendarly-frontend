import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  createPost:FormGroup;
  // @Output('submitForm')
  initJqueryData()
  {
    $(".tagsinput").tagsinput();
    
  }
  private initForm()
  {

     this.createPost=this.fb.group({
         name:this.fb.control(null,[Validators.required]),
         description:this.fb.control(null,[Validators.required]),
         date:this.fb.control(null,[Validators.required]),
         time:this.fb.control(null,[Validators.required]),
         topic:this.fb.group({
             name:this.fb.control("Topic 1,Topic 2",[Validators.required])
         }),
         tags:this.fb.control("Tag A,Tag B",[Validators.required])
     })

  }
  ngOnInit() {
    this.initForm();
    this.initJqueryData();
  }

}
