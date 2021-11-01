import { TestBed } from '@angular/core/testing';

import { PaysService } from './pays.service';

describe('PaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaysService = TestBed.get(PaysService);
    expect(service).toBeTruthy();
  });
});
