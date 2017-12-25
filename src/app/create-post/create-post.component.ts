import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit,Input } from '@angular/core';
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
  @Input() postData;
  initJqueryData()
  {
    $(".tagsinput").tagsinput();
    $('.html-editor').summernote({
        height: 150
    });
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
    if(this.postData)
      {
          this.createPost.patchValue(this.postData);
          console.log('data found')
      }
    this.initJqueryData();
    this.initDatetimePicker();
  }

}
