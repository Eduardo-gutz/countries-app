import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://restcountries.eu/rest/v2/'

  constructor(private http: HttpClient) {}

  public getCountries(path: string) {
    return this.http.get(this.url + path)
  }
}
