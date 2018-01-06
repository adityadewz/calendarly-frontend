import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
declare var $:any;
import * as moment from 'moment';
import * as _ from 'underscore';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  createPost:FormGroup;
  editMode=false;
  isSubmitClicked=false;
  files=[];
  @Output() exit=new EventEmitter();
  @Output() formSubmitted=new EventEmitter();
  @Output() formUpdated=new EventEmitter();
  @Input() date;
    submitForm()
    {
        // console.log($('.html-editor1').code())
        this.createPost.patchValue({
            description:$('.html-editor1').summernote().code()
        })
        this.isSubmitClicked=true;
        if(this.createPost.valid)
        {
            console.log(this.createPost.value)
            this.createPost.value.start=this.createPost.value.date;
            this.formSubmitted.emit(this.createPost.value);
        }
    }

    toggleVisibility(file)
    {
        file.isVisible=!file.isVisible
    }

    cancel()
    {
        this.exit.emit(null);
    }

    deleteFile(index)
    {
        this.files.splice(index,1);
    }

  @Input() postData;
  initJqueryData()
  {
    this.initDatetimePicker();
    
    $(".tagsinput").tagsinput();

    if(this.postData)
    {
        $('.html-editor1').summernote('code',this.postData.description,{
            height:150
        });
    }
    else{

        $('.html-editor1').summernote({
            height: 150
        });
    }


   $('file-images').hover(()=>{
       $(this).next().css({'display':'none'})
   })
    
  }    
  
  initDatetimePicker()
  {
      var dp=$('.date-picker1').datetimepicker({
          format: 'MM/DD/YYYY',
          defaultDate:new Date()
      }).on('dp.change',(e)=>
      {
          console.log(e)
          this.createPost.patchValue({
              date:e.date.toDate()
          })
      });

      var tp=$('.time-picker1').datetimepicker({
          format: 'LT',
          defaultDate:new Date()
      });

      $('.date-picker1').on('dp.change',(e)=>
      {
          console.log(e)
          this.createPost.patchValue({
              date:e.date.toDate()
          })
      })

      $('.time-picker1').on('dp.change',(e)=>
      {
          console.log(e)
          this.createPost.patchValue({
              time:e.date.toDate()
          })        })

  }


  private initForm()
  {
     this.createPost=this.fb.group({
         title:this.fb.control(null,[Validators.required]),
         description:this.fb.control('asd'),
         date:this.fb.control(null,[Validators.required]),
         time:this.fb.control(null,[Validators.required]),
         topic:this.fb.group({
             name:this.fb.control("Topic 1,Topic 2",[Validators.required])
         }),
         tags:this.fb.control("Tag A,Tag B",[Validators.required])
     })
  }

  updateForm()
  {
      var val=this.createPost.value;
      _.extend(this.postData,val)
    // val.start=val.date;    
    // val._id=this.postData._id;
    // val.comments=[];
    this.formUpdated.emit(this.postData);
    
  }

  ngOnInit() {
      console.log(this.date)
    this.initForm();
    if(this.postData)
      {
          this.editMode=true;
          this.createPost.patchValue(this.postData);
          console.log('data found');
      }
  }

//   exit()
//   {
//     this.route
//   }
  
  ngAfterViewInit()
  {
          this.initJqueryData();
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

//   ngAfterViewInit()
//   {
      
//   }

}
