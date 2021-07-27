import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Output() darkMode = new EventEmitter<boolean>();
  dark: boolean = true;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.darkMode) {
      this.dark = !JSON.parse(localStorage.darkMode);
    } else {

    }
  }
  activeDarkMode() {
    this.darkMode.emit(this.dark);
    if(!this.dark) {
      this.dark = true;
      localStorage.setItem('darkMode', JSON.stringify(false));
    } else {
      this.dark = false;
      localStorage.setItem('darkMode', JSON.stringify(true));
    }
  }

}
