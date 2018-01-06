import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {

  constructor() { }

  posts=[];

  getPosts()
  {
  //   var date = new Date();
  //   var d = date.getDate();
  //   var m = date.getMonth();
  //   var y = date.getFullYear();
  //   this.events=[
  //     {
  //         title: 'Hangout with friends',
  //         start: new Date(y, m, 1),
  //         end: new Date(y, m, 2),
  //         className: 'bgm-cyan'
  //     },
  //     {
  //         title: 'Meeting with client',
  //         start: new Date(y, m, 10),
  //         allDay: true,
  //         className: 'bgm-red'
  //     },
  //     {
  //         title: 'Repeat Event',
  //         start: new Date(y, m, 18),
  //         allDay: true,
  //         className: 'bgm-blue'
  //     },
  //     {
  //         title: 'Semester Exam',
  //         start: new Date(y, m, 20),
  //         end: new Date(y, m, 23),
  //         className: 'bgm-green'
  //     },
  //     {
  //         title: 'Soccor match',
  //         start: new Date(y, m, 5),
  //         end: new Date(y, m, 6),
  //         className: 'bgm-purple'
  //     },
  //     {
  //         title: 'Coffee time',
  //         start: new Date(y, m, 21),
  //         className: 'bgm-orange'
  //     },
  //     {
  //         title: 'Job Interview',
  //         start: new Date(y, m, 5),
  //         className: 'bgm-dark'
  //     },
  //     {
  //         title: 'IT Meeting',
  //         start: new Date(y, m, 5),
  //         className: 'bgm-cyan'
  //     },
  //     {
  //         title: 'Brunch at Beach',
  //         start: new Date(y, m, 1),
  //         className: 'bgm-purple'
  //     },
  //     {
  //         title: 'Live TV Show',
  //         start: new Date(y, m, 15),
  //         end: new Date(y, m, 17),
  //         className: 'bgm-orange'
  //     },
  //     {
  //         title: 'Software Conference',
  //         start: new Date(y, m, 25),
  //         end: new Date(y, m, 28),
  //         className: 'bgm-blue'
  //     },
  //     {
  //         title: 'Coffee time',
  //         start: new Date(y, m, 30),
  //         className: 'bgm-orange'
  //     },
  //     {
  //         title: 'Job Interview',
  //         start: new Date(y, m, 30),
  //         className: 'bgm-dark'
  //     },
  // ]
    return this.posts.slice()
  }

  deletePost(post)
  {
    this.posts.forEach((e,index)=>{
      if(e._id===post._id)
      {
        this.posts.splice(index,1);
      }
    })
  }

  // deleteComment(comment)
  // {
    
  // }

  savePost(post)
  {
    var index;
    this.posts.forEach((p,i)=>{
      if(p._id===post._id)
      {
        index=i;
      } 
    })

    this.posts[index]=post;
    
  }

  addPost(event)
  {
    this.posts.push(event)
  }

  getPost(postId)
  {
    return this.posts.filter(e=>e._id===postId)[0];
  }

  updatePost(post)
  {
    var postIndex;
    this.posts.forEach((obj,index)=>{

     postIndex=index;

    })
      console.log(postIndex)
    this.posts[postIndex]=post;

    console.log(this.posts)
  }

}
