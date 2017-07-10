import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import {Effect, Actions, toPayload} from "@ngrx/effects";
import {
  ADD_NOTIFICATION
} from './notification.actions';
import {Injectable} from "@angular/core";
import {NotificationService} from './notification.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class NotificationEffects {

  constructor(private action$: Actions, private store: Store<AppStore>, private notificationService: NotificationService) { }

  @Effect() addNotification$ = this.action$
    .ofType(ADD_NOTIFICATION)
    .switchMap(action => {
      this.notificationService.showNotification(action.payload);
      return Observable.of({type: null});
    });
}
