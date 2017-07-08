import { ActionReducer, Action } from '@ngrx/store';
import { Notification } from './notification.model';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export class AddNotificationAction implements Action {
  readonly type = ADD_NOTIFICATION;

  constructor(public payload: Notification) { }
}

export type Actions
  = AddNotificationAction;
