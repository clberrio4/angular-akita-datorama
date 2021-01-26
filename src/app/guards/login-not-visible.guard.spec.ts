import { TestBed } from '@angular/core/testing';

import { LoginNotVisibleGuard } from './login-not-visible.guard';

describe('LoginNotVisibleGuard', () => {
  let guard: LoginNotVisibleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginNotVisibleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
