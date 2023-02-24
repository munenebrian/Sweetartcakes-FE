import { TestBed } from '@angular/core/testing';

import { CategoryblogsService } from './categoryblogs.service';

describe('CategoryblogsService', () => {
  let service: CategoryblogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryblogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
