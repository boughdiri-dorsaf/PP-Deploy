import { TestBed } from '@angular/core/testing';

import { CursusService } from './cursus.service';

describe('CursusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursusService = TestBed.get(CursusService);
    expect(service).toBeTruthy();
  });
});
