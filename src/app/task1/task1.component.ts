import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  constructor(private theme:ThemeService){}
  setTheme(value:string)
  {  
    this.theme.applyTheme(value);
  }
}
