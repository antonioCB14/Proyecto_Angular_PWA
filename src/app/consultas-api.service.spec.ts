import { TestBed } from '@angular/core/testing';

import { ConsultasApiService } from './consultas-api.service';

describe('ConsultasApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultasApiService = TestBed.get(ConsultasApiService);
    expect(service).toBeTruthy();
  });
});
