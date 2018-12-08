import { TestBed } from '@angular/core/testing';

import { SuppliersDaoService } from './suppliers-dao.service';

describe('SuppliersDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuppliersDaoService = TestBed.get(SuppliersDaoService);
    expect(service).toBeTruthy();
  });
});
