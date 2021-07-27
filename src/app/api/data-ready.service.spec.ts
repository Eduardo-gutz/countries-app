import { TestBed } from '@angular/core/testing';

import { DataReadyService } from './data-ready.service';

describe('DataReadyService', () => {
  let service: DataReadyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataReadyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
