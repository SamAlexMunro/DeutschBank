import { TestBed } from '@angular/core/testing';

import { CountriesByRegionService } from './countries-by-region.service';

describe('CountriesByRegionService', () => {
  let service: CountriesByRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesByRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
