import { TestBed } from '@angular/core/testing';

import { UserCheckinService } from './user-checkin.service';

describe('UserCheckinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCheckinService = TestBed.get(UserCheckinService);
    expect(service).toBeTruthy();
  });
});
