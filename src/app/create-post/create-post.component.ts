import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  createPost:FormGroup;
  files=[];
  @Output() formSubmitted=new EventEmitter();
    @Input() date;
    submitForm()
    {
        console.log(this.createPost.value)
        this.formSubmitted.emit(this.createPost.value);
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
    $(".tagsinput").tagsinput();
    $('.html-editor').summernote({
        height: 150
    });

   $('file-images').hover(()=>{
       $(this).next().css({'display':'none'})
   })
    
  }    
  
  initDatetimePicker()
  {
      var dp=$('.date-picker').datetimepicker({
          format: 'DD/MM/YYYY'
      }).on('dp.change',(e)=>
      {
          console.log(e)
          this.createPost.patchValue({
              date:e.date.toDate()
          })
      });

      var tp=$('.time-picker').datetimepicker({
          format: 'LT'
      });

      $('.date-picker').on('dp.change',(e)=>
      {
          console.log(e)
          this.createPost.patchValue({
              date:e.date.toDate()
          })
      })

      $('.time-picker').on('dp.change',(e)=>
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
         description:this.fb.control(null,[Validators.required]),
         date:this.fb.control(this.date,[Validators.required]),
         time:this.fb.control(this.date,[Validators.required]),
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
    this.initDatetimePicker();
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
