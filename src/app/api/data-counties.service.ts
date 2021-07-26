import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCountiesService {
  @Output() data: EventEmitter<any> = new EventEmitter
  constructor() { }
}
