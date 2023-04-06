import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x=5;
  y=4;
  difference:any;
  sum:any;
  subtraction(){
    this.difference= (this.x - this.y)
  }
  addition(){
    this.sum=(this.x+ this.y)
  }

  Increment(){
    this.sum++;

  }
  Decrement(){
    this.difference--;

  }
  Reset(){
    this.x=0;
    this.y=0;
    this.sum=0;
    this.difference=0;
  }
  configuration: any="";
  constructor(){
    console.log(environment.environment_title);
    this.configuration = environment;
  }
}
