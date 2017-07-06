import { ActionReducer, Action } from '@ngrx/store';
import { Pipeline } from './pipeline.model';

export const LOAD_PIPELINES = 'LOAD_PIPELINES';
export const SELECT_PIPELINE = 'SELECT_PIPELINE';

export class LoadAction implements Action {
  readonly type = LOAD_PIPELINES;

  constructor(public payload: Pipeline[]) { }
}

export class SelectAction implements Action {
  readonly type = SELECT_PIPELINE;

  constructor(public payload: Pipeline) { }
}

export type Actions
  = LoadAction
  | SelectAction;
