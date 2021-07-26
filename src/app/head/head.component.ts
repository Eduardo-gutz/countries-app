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
  }
  activeDarkMode() {
    this.darkMode.emit(this.dark);
    if(!this.dark) {
      this.dark = true;
    } else {
      this.dark = false;
    }

  }

}
