import { TestBed } from '@angular/core/testing';

import { AcuerdosServService } from './acuerdos-serv.service';

describe('AcuerdosServService', () => {
  let service: AcuerdosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcuerdosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
