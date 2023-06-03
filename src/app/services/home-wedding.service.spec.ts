import { TestBed } from '@angular/core/testing';

import { HomeWeddingService } from './home-wedding.service';

describe('HomeWeddingService', () => {
  let service: HomeWeddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeWeddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
