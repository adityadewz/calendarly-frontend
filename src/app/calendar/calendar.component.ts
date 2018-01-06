import { Router } from '@angular/router';
import { EventsService } from './../events.service';
import { CalendarService } from './calendar.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
declare var $:any;
declare var swal:any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit  {
    // createPost:FormGroup;
    postDescription='';
    date=new Date();
    currentPost;
    isEditMode=false;
    files=[];
     constructor(private fb:FormBuilder,private router:Router,private eventsService:EventsService,private calendarService:CalendarService) { }
     
    initDatetimePicker()
    {
        var dp=$('.date-picker').datetimepicker({
            format: 'DD/MM/YYYY'
        }).on('dp.change',(e)=>
        {
            console.log(e)
            // this.createPost.patchValue({
            //     date:e.date.toDate()
            // })
        });

        var tp=$('.time-picker').datetimepicker({
            format: 'LT'
        });

        $('.date-picker').on('dp.change',(e)=>
        {
            console.log(e)
            // this.createPost.patchValue({
            //     date:e.date.toDate()
            // })
        })

        $('.time-picker').on('dp.change',(e)=>
        {
            console.log(e)
            // this.createPost.patchValue({
            //     time:e.date.toDate()
            // })   
             })

    }

    //  private initForm()
    //  {

    //     this.createPost=this.fb.group({
    //         name:this.fb.control(null,[Validators.required]),
    //         description:this.fb.control(null,[Validators.required]),
    //         date:this.fb.control(null,[Validators.required]),
    //         time:this.fb.control(null,[Validators.required]),
    //         topic:this.fb.group({
    //             name:this.fb.control("Topic 1,Topic 2",[Validators.required])
    //         }),
    //         tags:this.fb.control("Tag A,Tag B",[Validators.required])
    //     })

    //  }

     addPost(post)
     {

        post.start=post.date;
        post.comments=[];
        // post.title=post.name;
        post.fullDay=true;
        post._id=Date.now();
        post.saved=true;

        swal('Post Added','Post has been added to your calendar','success').then(()=>{
            this.calendarService.addPost(post);
            $("#calendar").fullCalendar( 'renderEvent', post ,true);            
            $('.modal').modal('hide');
            // this.createPost.reset();
            // this.createPost.markAsUntouched();
            
        })
        
     }

     updatePost()
     {
        swal({
            title: 'Are you sure?',
            text: "You want to update this post",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
          }).then((res)=>{
              if(res.value)
              {
                this.calendarService.updatePost(this.currentPost);
                $("#calendar").fullCalendar( 'updateEvent', this.currentPost);   
              }
          })
               
     }

     deletePost(post)
     {
         this.calendarService.deletePost(post);
         swal({
            title: 'Are you sure?',
            text: "You want to delete this post",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              swal(
                'Deleted!',
                'The post has been removed from the calendar',
                'success'
              ).then(()=>{
                  console.log(post)
                $("#calendar").fullCalendar( 'removeEvents', post._id );
                $('.modal').modal('hide');
                
              })
            }
          })

         
     }

     submitForm(post)
     {
        //  var post=this.createPost.value;
        // this.createPost.value.description=this.postDescription;
         console.log(post);
        // var str= $('.html-editor').froalaEditor('html.get', true);
        var str=$('.html-editor').summernote('code');
        // this.createPost.patchValue({
        //     description:$('.html-editor').innerHtml
        // })
        console.log(str);

        this.addPost(post);

         
     }

     initJqueryData()
     {
        $(".tagsinput").tagsinput();
        
        $('.modal-lg').css({'z-index':'999'})

        $(".html-editor").summernote({
            height:150
        });
        this.initDatetimePicker()
        this.initCalendar();
        
     }

     uploadFiles()
     {
         $('#fileUpload').click()
     }

     selectFiles(event)
     {
         console.log(event)
         this.files=event.target.files;
     }


    ngOnInit() {
        console.log(this.calendarService.getPosts(),'posts')
        this.initJqueryData();
        console.log('Hello')

  }
     
     initCalendar()
     {
         console.log('initing calendar')
        // $(document).ready(function() {
            
          var date = new Date();
          var d = date.getDate();
          var m = date.getMonth();
          var y = date.getFullYear();

          var cId = $('#calendar'); //Change the name if you want. I'm also using thsi add button for more actions
    
          //Generate the Calendar
          cId.fullCalendar({
              header: {
                  right: '',
                  center: 'prev, title, next',
                  left: ''
              },
    
              theme: true, //Do not remove this as it ruin the design
              selectable: true,
              selectHelper: true,
              editable: true,
    
              //Add Events
              events: this.calendarService.getPosts(),
              eventClick: (calEvent, jsEvent, view)=> {
                  this.router.navigate(['/','post',calEvent._id])
              },
               
              //On Day Select
              select: (start, end, allDay) =>{
                  $('#addNew-event').modal('show');   
                  $('#addNew-event input:text').val('');
                  $('#getStart').val(start);
                  $('#getEnd').val(end);
              },
              dayClick: (date, jsEvent, view)=> {
                  console.log(date)
                  this.date=date.toDate();
                  this.isEditMode=false;
        $(this).css('background-color', 'red');

                }
              });

          var actionMenu = '<ul class="actions actions-alt" id="fc-actions">' +
                              '<li class="dropdown">' +
                                  '<a href="" data-toggle="dropdown"><i class="md md-more-vert"></i></a>' +
                                  '<ul class="dropdown-menu dropdown-menu-right">' +
                                      '<li class="active">' +
                                          '<a data-view="month" href="">Month View</a>' +
                                      '</li>' +
                                      '<li>' +
                                          '<a data-view="basicWeek" href="">Week View</a>' +
                                      '</li>' +
                                      '<li>' +
                                          '<a data-view="agendaWeek" href="">Agenda Week View</a>' +
                                      '</li>' +
                                      '<li>' +
                                          '<a data-view="basicDay" href="">Day View</a>' +
                                      '</li>' +
                                      '<li>' +
                                          '<a data-view="agendaDay" href="">Agenda Day View</a>' +
                                      '</li>' +
                                  '</ul>' +
                              '</div>' +
                          '</li>';
    
    
          cId.find('.fc-toolbar').append(actionMenu);
          
          //Event Tag Selector
          (function(){
              $('body').on('click', '.event-tag > span', function(){
                  $('.event-tag > span').removeClass('selected');
                  $(this).addClass('selected');
              });
          })();
          $('body').on('click', '#fc-actions [data-view]', function(e){
              e.preventDefault();
              var dataView = $(this).attr('data-view');
              
              $('#fc-actions li').removeClass('active');
              $(this).parent().addClass('active');
              cId.fullCalendar('changeView', dataView);  
          }); 
     }

}
