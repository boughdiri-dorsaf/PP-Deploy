import { TestBed } from '@angular/core/testing';

import { DiplomeService } from './diplome.service';

describe('DiplomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiplomeService = TestBed.get(DiplomeService);
    expect(service).toBeTruthy();
  });
});
