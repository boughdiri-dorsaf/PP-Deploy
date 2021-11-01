import { TestBed } from '@angular/core/testing';

import { CursusgeneralService } from './cursusgeneral.service';

describe('CursusgeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursusgeneralService = TestBed.get(CursusgeneralService);
    expect(service).toBeTruthy();
  });
});
