import { TestBed } from '@angular/core/testing';

import { BacclaureatService } from './bacclaureat.service';

describe('BacclaureatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BacclaureatService = TestBed.get(BacclaureatService);
    expect(service).toBeTruthy();
  });
});
