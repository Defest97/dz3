import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { Task1Component } from './task1/task1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTheme = '';

  constructor(private theme: ThemeService) {
  theme.getTheme().subscribe((theme: string) => {
      this.currentTheme = theme;
    });
  }

}
