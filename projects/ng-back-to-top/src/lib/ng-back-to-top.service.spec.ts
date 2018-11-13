import { TestBed } from '@angular/core/testing';

import { NgBackToTopService } from './ng-back-to-top.service';

describe('NgBackToTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBackToTopService = TestBed.get(NgBackToTopService);
    expect(service).toBeTruthy();
  });
});
