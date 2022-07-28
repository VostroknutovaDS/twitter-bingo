import { TestBed } from '@angular/core/testing';

import { TableGenerationService } from './table-generation.service';

describe('TableGenerationService', () => {
  let service: TableGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
