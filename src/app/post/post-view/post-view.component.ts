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
  post:any={
    comments:[]
  };
  editMode=false;
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
     if(!this.post)
     {
      this.router.navigate(['/','calendar']);
     }
     console.log(this.post);

      // this.posts=this.calendarService.getPosts().filter(obj=>obj._id!==this.post._id);

    })
  }

  exit()
  {
    this.router.navigate(['/','calendar']);
  }

  formUpdated(value)
  {
    swal({
      title: 'Are you sure?',
      text: "You will not be able to recover the old post",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update'
    }).then(result=>{
      if(result.value)
      {
        this.calendarService.savePost(value); 
        this.router.navigate(['/','calendar'])
      }
    })

  }

  // formSubmitted(value:any)
  // {
  //   value._id=this.post._id;
  //   this.calendarService.savePost(value);
  //   this.router.navigate(['/','calendar'])
  // }

  addAttachment()
  {
    $("html, body").animate({ scrollTop: $('#attachFile').offset().top }, 1000);
    
  }

  postComment(body:string,post)
  {
    if(body.length)
    {
      post.comments.push({body:body,date:new Date(),name:'Aditya Dewaskar',_id:Date.now()});
      this.commentBody='';
    }
    
  }

  // editComment(comment)
  // {
  //   this.editMode=true;
  //   this.commentBody=comment.body;
  // }

  deletePost(post)
  {
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
            this.calendarService.deletePost(post);
            this.router.navigate(['/','calendar'])
           })
         }
       })

      
  }


  deleteComment(comment)
  {
      swal({
         title: 'Are you sure?',
         text: "You will not be able to recover this comment",
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Delete'
       }).then((result) => {
         if (result.value) {
           swal(
             'Deleted!',
             'The comment has been removed from your calendar',
             'success'
           ).then(()=>{
             var index;
            this.post.comments.forEach((c,i)=>{
              if(c._id===comment._id)
              {
                index=i;
              }
            })

            this.post.comments.splice(index,1)
            this.calendarService.savePost(this.post);
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
