import { EventsService } from './../../events.service';
import { appRoutes } from './../../app-routing.module';
import { Component, Input,OnInit,SimpleChange } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,private eventsService:EventsService) { }
  routes=appRoutes;
  ngOnInit() {
    // this.eventsService.toggleSidebar.subscribe(()=>{
    //   $('#sidebar').toggleClass('toggled');
    //   $('#header').toggleClass('sidebar-toggled')
    // })
  }



}
