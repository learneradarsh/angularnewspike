import { TestBed } from '@angular/core/testing';

import { HandletimerService } from './handletimer.service';

describe('HandletimerService', () => {
  let service: HandletimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandletimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
