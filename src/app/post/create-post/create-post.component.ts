import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
declare var $:any;
import * as moment from 'moment';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  createPost:FormGroup;
  isSubmitClicked=false;
  files=[];
  @Output() formSubmitted=new EventEmitter();
    @Input() date;
    submitForm()
    {
        // console.log($('.html-editor1').code())
        this.createPost.patchValue({
            description:$('.html-editor1').summernote('code')
        })
        this.isSubmitClicked=true;
        if(this.createPost.valid)
        {
            console.log(this.createPost.value)
            this.formSubmitted.emit(this.createPost.value);
        }
    }

    toggleVisibility(file)
    {
        file.isVisible=!file.isVisible
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
        $('.html-editor1').summernote('code',this.postData.description)
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
          format: 'DD/MM/YYYY',
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
         name:this.fb.control(null,[Validators.required]),
         description:this.fb.control('asd'),
         date:this.fb.control(null,[Validators.required]),
         time:this.fb.control(null,[Validators.required]),
         topic:this.fb.group({
             name:this.fb.control("Topic 1,Topic 2",[Validators.required])
         }),
         tags:this.fb.control("Tag A,Tag B",[Validators.required])
     })
  }
  ngOnInit() {
      console.log(this.date)
    this.initForm();
    if(this.postData)
      {
          this.createPost.patchValue(this.postData);
          console.log('data found')
      }
  }
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
