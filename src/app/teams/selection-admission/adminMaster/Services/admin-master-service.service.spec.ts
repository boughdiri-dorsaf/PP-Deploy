import { TestBed } from '@angular/core/testing';

import { AdminMasterServiceService } from './admin-master-service.service';

describe('AdminMasterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminMasterServiceService = TestBed.get(AdminMasterServiceService);
    expect(service).toBeTruthy();
  });
});
