import { appRoutes } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  routes=appRoutes;

  // openPage(url)
  // {
  //   console.log(url)
  //   this.router.navigateByUrl(url)
  // }

  ngOnInit() {
  }

}
