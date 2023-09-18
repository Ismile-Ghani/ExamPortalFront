import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { normalUsersGuard } from './normal-users.guard';

describe('normalUsersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => normalUsersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
