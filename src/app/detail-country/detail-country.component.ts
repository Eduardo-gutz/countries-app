import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { DataReadyService } from '../api/data-ready.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {
  country: any;
  borders: any = [];

  constructor(private dataReady: DataReadyService, private rutaActiva: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.dataReady.ready.emit({data: false});
    this.rutaActiva.params.subscribe(code =>{
      this.api.getCountries(`alpha/${code.code.toLowerCase()}`).subscribe(response => {
        this.country = response
        this.getBorders();
        this.dataReady.ready.emit({data: true});
      })
    })
  }
  getBorders() {
    this.borders = [];
    console.log();
    if(this.country.borders) {
      for(let border of this.country.borders) {
        this.api.getCountries(`alpha/${border.toLowerCase()}`).subscribe(response => {
          let res = response;
          this.borders.push(res)
        })
      }

    }
  }
}
