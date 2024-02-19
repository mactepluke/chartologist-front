import { TestBed } from '@angular/core/testing';

import { BacktestingService } from './backtesting.service';

describe('BacktestingService', () => {
  let service: BacktestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacktestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
