import { TestBed } from '@angular/core/testing';

import { DataCountiesService } from './data-counties.service';

describe('DataCountiesService', () => {
  let service: DataCountiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCountiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
