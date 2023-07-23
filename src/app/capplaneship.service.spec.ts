import { TestBed } from '@angular/core/testing';

import { CapplaneshipService } from './capplaneship.service';

describe('CapplaneshipService', () => {
  let service: CapplaneshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapplaneshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
