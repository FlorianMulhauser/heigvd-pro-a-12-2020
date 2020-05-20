import { TestBed } from '@angular/core/testing';

import { RandomColorService } from './random-color.service';

describe('RandomColorService', () => {
  let service: RandomColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
