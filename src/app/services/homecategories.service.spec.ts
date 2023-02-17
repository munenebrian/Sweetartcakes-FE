import { TestBed } from '@angular/core/testing';

import { HomecategoriesService } from './homecategories.service';

describe('HomecategoriesService', () => {
  let service: HomecategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomecategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
