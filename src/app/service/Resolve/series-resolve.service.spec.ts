import { TestBed } from '@angular/core/testing';

import { SeriesResolveService } from './series-resolve.service';

describe('SeriesResolveService', () => {
  let service: SeriesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
