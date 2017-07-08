import { PipelineState } from './pipeline/pipeline.reducer';
import { NotificationState } from './notifications/notification.reducer';

export interface AppStore {
  pipelineReducer: PipelineState;
  notificationReducer: NotificationState;
}
