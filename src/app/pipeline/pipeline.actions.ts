import { ActionReducer, Action } from '@ngrx/store';
import { Pipeline, PackageBuild, TestSuite, TestCase } from './pipeline.model';

export const REQUEST_PIPELINES = 'REQUEST_PIPELINES';
export const LOAD_PIPELINES = 'LOAD_PIPELINES';
export const LOAD_PACKAGE_BUILDS = 'LOAD_PACKAGE_BUILDS';
export const LOAD_TEST_SUITES = 'LOAD_TEST_SUITES';
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

export class LoadTestSuitesAction implements Action {
  readonly type = LOAD_TEST_SUITES;

  constructor(public payload: TestSuite[]) { }
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
  | LoadTestSuitesAction;
