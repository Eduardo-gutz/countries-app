import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  @Output() filter: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
