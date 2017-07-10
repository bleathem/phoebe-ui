import {ErrorHandler, Injectable} from '@angular/core'
import {NotificationService} from './notifications/notification.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(private notificationService: NotificationService) {
    super(true);
  }

  handleError(message) {
    // this.logger.log(error);
    // console.log('***************************************')
    // this.store.dispatch(new AddNotificationAction(new Notification(message, 'danger')));
    this.notificationService.showNotification(message, 'danger');
    // console.log("Logger", message);
    super.handleError(message);
  }
}
