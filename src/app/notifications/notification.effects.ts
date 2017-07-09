import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import {Effect, Actions, toPayload} from "@ngrx/effects";
import {
  ADD_NOTIFICATION
} from './notification.actions';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {NotificationService} from './notification.service';

@Injectable()
export class NotificationEffects {

  constructor(private action$: Actions, private store: Store<AppStore>, private notificationService: NotificationService) { }

  @Effect() addNotification$ = this.action$
    .ofType(ADD_NOTIFICATION)
    .map(toPayload)
    .map(notification => this.notificationService.showNotification(notification.message, notification.severity));
}
