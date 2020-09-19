import { TestBed } from '@angular/core/testing';

import { MlDatatableService } from './ml-datatable.service';

describe('MlDatatableService', () => {
  let service: MlDatatableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlDatatableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
