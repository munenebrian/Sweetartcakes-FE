import { TestBed } from '@angular/core/testing';

import { TopdealsService } from './topdeals.service';

describe('TopdealsService', () => {
  let service: TopdealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopdealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
