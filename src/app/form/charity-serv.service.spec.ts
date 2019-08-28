import { TestBed } from '@angular/core/testing';

import { CharityServService } from './charity-serv.service';

describe('CharityServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharityServService = TestBed.get(CharityServService);
    expect(service).toBeTruthy();
  });
});
