import { TestBed } from '@angular/core/testing';

import { TopsellingService } from './topselling.service';

describe('TopsellingService', () => {
  let service: TopsellingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopsellingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
