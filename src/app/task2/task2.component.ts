import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  color='';
  onInput(value:string)
  {
    const red = (10 - +value) * 25.5;
    this.color=`rgb(${255 - red}, ${red}, 0)`;
    return this.color;
  }
}
