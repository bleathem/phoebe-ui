import { Component, Inject, ViewContainerRef } from '@angular/core';

import { NotificationService } from './notifications/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(NotificationService) notificationService,
              @Inject(ViewContainerRef) viewContainerRef) {
    notificationService.setRootViewContainerRef(viewContainerRef);
  }
}
