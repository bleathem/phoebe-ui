import { Actions, ADD_NOTIFICATION } from './notification.actions';

import { Notification } from './notification.model';

export interface NotificationState {
  notifications: Notification[];
};

export const initialState: NotificationState = {
  notifications: []
};

export function notifications(state = initialState, action: Actions): NotificationState {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return {
        notifications: state.notifications.concat([action.payload])
      };
		default:
			return state;
	}
}
