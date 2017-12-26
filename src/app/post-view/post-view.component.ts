import { EventsService } from './../events.service';
import { CalendarService } from './../calendar/calendar.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private route:ActivatedRoute,private calendarService:CalendarService,private eventsService:EventsService) { }
  post;
  isWatch;
  ngOnInit() {
    // $('.selectpicker').selectpicker();  
    // this.initJqueryData();
    this.route.params.subscribe(param=>{
      $('.html-editor').summernote({
        height:150
      })  
      console.log(param)
     this.post= this.calendarService.getPost(Number(param.id));
     console.log(this.post)
    })
  }

  onWatchToggle()
  {
    this.isWatch=!this.isWatch;
      this.eventsService.notify(this.isWatch?'You were added as watcher':'You were removed as watcher', 'inverse');
    
  }

  initJqueryData()
  {
    $(".tagsinput").tagsinput();
    $('.selectpicker').selectpicker();
    // $('.selectpicker').selectpicker({
    //   style: 'btn-info',
    //   size: 4
    // });
      }

  ngAfterViewInit()
  {
    this.initJqueryData();
  }

}
