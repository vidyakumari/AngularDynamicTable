import { TestBed } from '@angular/core/testing';

import { NewserveService } from './newserve.service';

describe('NewserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewserveService = TestBed.get(NewserveService);
    expect(service).toBeTruthy();
  });
});
