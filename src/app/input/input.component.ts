import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { DataCountiesService } from '../api/data-counties.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  countries: any;
  countrySearch: string = '';

  constructor(private api: ApiService, private dataCountries: DataCountiesService) { }

  ngOnInit(): void {
    this.api.getCountries('all').subscribe(data => {
      this.countries = data
    })
  }
  search() {
    const filtered = []
    for(let country of this.countries) {
      if(country.name.toLowerCase().indexOf(this.countrySearch) != -1){
        filtered.push(country);
      };
    };
    this.dataCountries.data.emit({
      data: filtered
    })
  }
}
