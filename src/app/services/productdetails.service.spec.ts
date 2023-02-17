import { TestBed } from '@angular/core/testing';

import { ProductdetailsService } from './productdetails.service';

describe('ProductdetailsService', () => {
  let service: ProductdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
