import { EventsService } from './../../events.service';
import { CalendarService } from './../../calendar/calendar.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var swal:any;
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private calendarService:CalendarService,private eventsService:EventsService) { }
  post:any={};
  posts=[];
  isWatch;
  commentBody;
  ngOnInit() {
    // $('.selectpicker').selectpicker();  
    // this.initJqueryData();
    this.route.params.subscribe(param=>{
      $('.html-editor').summernote({
        height:150
      })  
      console.log(param)
     this.post= this.calendarService.getPost(Number(param.id));
     console.log(this.post);

      // this.posts=this.calendarService.getPosts().filter(obj=>obj._id!==this.post._id);

    })
  }

  addAttachment()
  {
    $("html, body").animate({ scrollTop: $('#attachFile').offset().top }, 1000);
    
  }

  postComment(body,post)
  {
    post.comments.push({body:body,date:new Date(),name:'Aditya Dewaskar'});
    this.commentBody='';
  }

  deletePost(post)
  {
      this.calendarService.deletePost(post);
      swal({
         title: 'Are you sure?',
         text: "You will not be able to recover this post",
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Delete'
       }).then((result) => {
         if (result.value) {
           swal(
             'Deleted!',
             'The post has been removed from your calendar',
             'success'
           ).then(()=>{
              this.router.navigate(['/','calendar'])
           })
         }
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
  }

  ngAfterViewInit()
  {
    this.initJqueryData();
  }

}
