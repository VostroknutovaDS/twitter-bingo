import { TestBed } from '@angular/core/testing';

import { ElementsBaseService } from './elements-base.service';

describe('ElementsBaseService', () => {
  let service: ElementsBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
