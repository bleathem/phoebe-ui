import { TestBed, inject } from '@angular/core/testing';

import { TestCaseStatusService } from './test-case-status.service';

describe('TestCaseStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestCaseStatusService]
    });
  });

  it('should be created', inject([TestCaseStatusService], (service: TestCaseStatusService) => {
    expect(service).toBeTruthy();
  }));
});
