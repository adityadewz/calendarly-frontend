import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventsService {

  toggleChat=new Subject<any>()
  toggleSidebar=new Subject<any>();
  constructor() { }

}
