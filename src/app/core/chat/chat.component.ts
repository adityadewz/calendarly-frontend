import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    // this.eventsService.toggleChat.subscribe(()=>{
    //   // console.log('toggled',e)
    //   $('#chat').toggleClass('open')
    // })
  }

}
