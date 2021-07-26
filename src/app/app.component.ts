import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';
  darkMode:boolean = false;

  changeDarkMode($event: boolean) {
    this.darkMode = $event
  }
}
