import { Router,NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'app';
 
  // ngOnInit()
  // {
  //   $("#sidebar").toggleClass('toggled');    
  //   $('#menu-trigger').toggleClass('open');  
  //   this.router.events
  //   .subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //             $("#sidebar").toggleClass('toggled');    
  //             $('#menu-trigger').toggleClass('open');   
              
  //     }
  //   });  } 

}


