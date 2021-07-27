import { Component, OnInit} from '@angular/core';
import { DataReadyService } from './api/data-ready.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';
  darkMode:boolean = false;
  ready: boolean = false;
  constructor(private dataReady: DataReadyService) {
  }
  ngOnInit() {
    this.darkMode = JSON.parse(localStorage.darkMode);
    this.dataReady.ready.subscribe(data => {
      this.ready = data.data;
    })
  }

  changeDarkMode($event: boolean) {
    this.darkMode = $event
  }
}
