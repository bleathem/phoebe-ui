import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { pipelines as pipelineState } from '../pipeline/pipeline.reducer';
import { notifications as notificationState } from './notification.reducer';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService],
      imports: [StoreModule.provideStore({pipelineState, notificationState})]
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
