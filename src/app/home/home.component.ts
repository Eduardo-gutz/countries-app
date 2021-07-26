import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  darkMode:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  changeDarkMode($event: boolean) {
    this.darkMode = $event
  }

}
