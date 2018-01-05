import { EventsService } from './../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    // this.eventsService.toggleSidebar.next()
  }

  ngOnDestroy()
  {
        this.eventsService.toggleSidebar.next()
  }

}
