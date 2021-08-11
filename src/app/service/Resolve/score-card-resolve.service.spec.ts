import { TestBed } from '@angular/core/testing';

import { ScoreCardResolveService } from './score-card-resolve.service';

describe('ScoreCardResolveService', () => {
  let service: ScoreCardResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreCardResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
