import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Film Library';
  uuidValue?:string;
  constructor() {
   }

  generateUUID(){
    this.uuidValue=UUID.UUID();
    return this.uuidValue;
  }
}
