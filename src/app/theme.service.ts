import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme: Subject<string> = new Subject<string>();

  applyTheme(theme: string) {
    this.theme.next(theme);
  }

  getTheme() {
    return this.theme.asObservable();
  }
}
