import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataReadyService {
  @Output() ready: EventEmitter<any> = new EventEmitter()

  constructor() { }
}
