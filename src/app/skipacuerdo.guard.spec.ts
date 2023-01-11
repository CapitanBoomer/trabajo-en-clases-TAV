import { TestBed } from '@angular/core/testing';

import { SkipacuerdoGuard } from './skipacuerdo.guard';

describe('SkipacuerdoGuard', () => {
  let guard: SkipacuerdoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SkipacuerdoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
