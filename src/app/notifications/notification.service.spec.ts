import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { notificationReducer } from './notification.reducer';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService],
      imports: [StoreModule.provideStore({notificationReducer})]
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
