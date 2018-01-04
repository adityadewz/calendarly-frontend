import { EventsService } from './../../events.service';
import { Component, OnInit,Input,SimpleChange } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private eventsService:EventsService) { }
  ngOnInit() {
  }

 

}
