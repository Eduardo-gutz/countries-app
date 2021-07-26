import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { DataCountiesService } from '../api/data-counties.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: any;

  constructor(private api: ApiService, private dataCountries: DataCountiesService) { }

  ngOnInit(): void {
    this.dataCountries.data.subscribe(data => {
      this.countries= data.data;
    })
  }

  countriesList(filter: string) {
    this.api.getCountries(filter).subscribe(response => {
      this.countries = response;
    })
  }

}
