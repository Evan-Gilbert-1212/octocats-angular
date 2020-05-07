import { TestBed } from '@angular/core/testing';

import { GetOctocatsService } from './get-octocats.service';

describe('GetOctocatsService', () => {
  let service: GetOctocatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOctocatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
