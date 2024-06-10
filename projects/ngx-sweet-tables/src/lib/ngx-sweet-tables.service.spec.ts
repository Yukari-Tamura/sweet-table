import { TestBed } from '@angular/core/testing';

import { NgxSweetTablesService } from './ngx-sweet-tables.service';

describe('NgxSweetTablesService', () => {
  let service: NgxSweetTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSweetTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
