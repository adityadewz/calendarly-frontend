import { CalendarService } from './../../calendar/calendar.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-post',
  templateUrl: './dashboard-post.component.html',
  styleUrls: ['./dashboard-post.component.scss']
})
export class DashboardPostComponent implements OnInit {

  constructor(private fb:FormBuilder,private calendarService:CalendarService) { }
  posts=[];
  createPost:FormGroup;
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

  getPosts()
  {
    this.posts=this.calendarService.getPosts();
  }


  ngOnInit() {
    this.getPosts();
    console.log('dashboard post')
    this.initForm();
  }


}
