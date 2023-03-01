import { TestBed } from '@angular/core/testing';

import { OcassionalcakedetailsService } from './ocassionalcakedetails.service';

describe('OcassionalcakedetailsService', () => {
  let service: OcassionalcakedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcassionalcakedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
