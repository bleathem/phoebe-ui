import { ActionReducer, Action } from '@ngrx/store';
import { Pipeline, PackageBuild, TestCase } from './pipeline.model';

export const REQUEST_PIPELINES = 'REQUEST_PIPELINES';
export const LOAD_PIPELINES = 'LOAD_PIPELINES';
export const LOAD_PACKAGE_BUILDS = 'LOAD_PACKAGE_BUILDS';
export const LOAD_TEST_CASES = 'LOAD_TEST_CASES';
export const SELECT_PIPELINE = 'SELECT_PIPELINE';
export const SELECT_PACKAGE_BUILD = 'SELECT_PACKAGE_BUILD';

export class RequestPipelinesAction implements Action {
  readonly type = REQUEST_PIPELINES;

  constructor() { }
}

export class LoadPipelinesAction implements Action {
  readonly type = LOAD_PIPELINES;

  constructor(public payload: Pipeline[]) { }
}

export class LoadPackageBuildsAction implements Action {
  readonly type = LOAD_PACKAGE_BUILDS;

  constructor(public payload: Pipeline) { }
}

export class LoadTestCasesAction implements Action {
  readonly type = LOAD_TEST_CASES;

  constructor(public payload: TestCase[]) { }
}

export class SelectPipelineAction implements Action {
  readonly type = SELECT_PIPELINE;

  constructor(public payload: Pipeline) { }
}

export class SelectPackageBuildAction implements Action {
  readonly type = SELECT_PACKAGE_BUILD;

  constructor(public payload: PackageBuild) { }
}

export type Actions
  = LoadPipelinesAction
  | LoadPackageBuildsAction
  | SelectPipelineAction
  | SelectPackageBuildAction
  | LoadTestCasesAction;
