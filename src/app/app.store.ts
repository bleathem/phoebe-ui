import { PipelineState } from './pipeline/pipeline.reducer';
import { NotificationState } from './notifications/notification.reducer';

export interface AppStore {
  pipelineState: PipelineState;
  notificationState: NotificationState;
}
