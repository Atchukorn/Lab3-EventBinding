import { Component } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent {
  title1 = 'Event Binding ';
  i : number = 0;

  public addCount(){
   this.i++;
  }
}
