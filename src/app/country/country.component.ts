import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataCountiesService } from '../api/data-counties.service';
import { DataReadyService } from '../api/data-ready.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: any;

  constructor(private dataReady: DataReadyService, private dataCountries: DataCountiesService) { }

  ngOnInit(): void {
    this.dataReady.ready.emit({data: false});
    this.dataCountries.data.subscribe(data => {
      this.countries= data.data;
      this.dataReady.ready.emit({data: true});
    })
  }
}
