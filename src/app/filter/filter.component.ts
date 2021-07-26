import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { DataCountiesService } from '../api/data-counties.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  continentFilter = '';
  continents:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  active: boolean = false;
  data: any;

  constructor(private api: ApiService, private dataCountries: DataCountiesService) { }

  ngOnInit(): void {
    this.get('all');
  }

  select(continent: string): void {
    this.continentFilter = continent;
    this.filter();
  }
  get(filt: string) {
    this.api.getCountries(filt).subscribe(response => {
      this.dataCountries.data.emit({
        data: response
      });
    })
  }
  filter() {
    this.get('region/' + this.continentFilter.toLowerCase())
    this.active = false;
  }
  dropDown() {


    
    if(this.active) {
      this.active = false;
    } else{
      this.active = true;
    }
  }
}
