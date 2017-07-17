import { ActionReducer, Action } from '@ngrx/store';
import { Pipeline, PackageBuild, TestSuite, TestCase } from './pipeline.model';

/**
Actions can be divided into the following three categories: commands, documents, events.
Commands:
Dispatching a command is akin to invoking a method: we want to do something specific.
This means we can only have one place, one handler, for every command.
This also means that we may expect a reply: either a value or an error.
To indicate that an action is a command start with a verb.

Documents:
When dispatching a document, we notify the application that some entity has been updated.
Name documents using nouns or noun phrases

Events:
When dispatching an event, we notify the application about an occured change.
As with documents, we do not get a reply and there might be more than one handler.
**/

export const REQUEST_PIPELINES = 'REQUEST_PIPELINES';
export const PIPELINES = 'PIPELINES';
export const PIPELINE = 'PIPELINE';
export const PACKAGE_BUILDS = 'PACKAGE_BUILDS';
export const PACKAGE_BUILD = 'PACKAGE_BUILD';
export const REQUEST_TEST_SUITES = 'REQUEST_TEST_SUITES';
export const TEST_SUITES = 'TEST_SUITES';

export class RequestPipelinesAction implements Action {
  readonly type = REQUEST_PIPELINES;
  public payload = null;

  constructor() { }
}

export class PipelinesAction implements Action {
  readonly type = PIPELINES;

  constructor(public payload: Pipeline[]) { }
}

export class PipelineAction implements Action {
  readonly type = PIPELINE;

  constructor(public payload: Pipeline) { }
}

export class PackageBuildsAction implements Action {
  readonly type = PACKAGE_BUILDS;

  public payload: {
    pipeline: Pipeline
    packageBuilds: PackageBuild[]
  };

  constructor(public pipeline: Pipeline, public packageBuilds: PackageBuild[]) {
    this.payload = {
      pipeline: pipeline,
      packageBuilds: packageBuilds
    }
  }
}

export class PackageBuildAction implements Action {
  readonly type = PACKAGE_BUILD;

  constructor(public payload: PackageBuild) { }
}

export class RequestTestSuitesAction implements Action {
  readonly type = REQUEST_TEST_SUITES;
  public payload: {
    pipeline: Pipeline
    packageBuild: PackageBuild
  };

  constructor(public pipeline: Pipeline, public packageBuild: PackageBuild) {
    this.payload = {
      pipeline: pipeline,
      packageBuild: packageBuild
    }
  }
}

export class TestSuitesAction implements Action {
  readonly type = TEST_SUITES;

  constructor(public payload: TestSuite[]) { }
}

export type Actions
  = RequestPipelinesAction
  | PipelinesAction
  | PipelineAction
  | PackageBuildsAction
  | PackageBuildAction
  | RequestTestSuitesAction
  | TestSuitesAction;
