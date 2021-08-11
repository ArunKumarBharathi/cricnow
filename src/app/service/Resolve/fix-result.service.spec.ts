import { TestBed } from '@angular/core/testing';

import { FixResultService } from './fix-result.service';

describe('FixResultService', () => {
  let service: FixResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
