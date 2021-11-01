import { TestBed } from '@angular/core/testing';

import { GouvernoratService } from './gouvernorat.service';

describe('GouvernoratService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GouvernoratService = TestBed.get(GouvernoratService);
    expect(service).toBeTruthy();
  });
});
