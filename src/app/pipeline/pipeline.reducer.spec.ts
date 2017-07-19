import {initialState, pipelineReducer} from './pipeline.reducer';
import { Pipeline, PackageBuild, TestSuite } from './pipeline.model';
import {
  REQUEST_PIPELINES,
  PIPELINES,
  PIPELINE,
  PACKAGE_BUILDS,
  PACKAGE_BUILD,
  REQUEST_TEST_SUITES,
  TEST_SUITES,
  RequestPipelinesAction,
  PipelinesAction,
  PipelineAction,
  PackageBuildsAction,
  PackageBuildAction,
  RequestTestSuitesAction,
  TestSuitesAction
} from './pipeline.actions';

describe('pipelineReducer', () => {
  it('should handle initialState', () => {
    const initialState = pipelineReducer.call({}, undefined, {type: null});
    expect(initialState.pipelines.length).toEqual(0);
  });

  it('should load pipelines', () => {
    const pipelines = [ new Pipeline('asd', 123) ];
    const state = pipelineReducer(undefined, new PipelinesAction(pipelines));
    expect(state.pipelines.length).toEqual(pipelines.length);
  });

  it('should load packageBuilds', () => {
    const pipeline = new Pipeline('asd', 123);
    const pipelines = [ Object.freeze(Object.assign({}, pipeline)) ];
    const packageBuilds = [ new PackageBuild(345, 234) ];
    const _initialState = Object.assign({}, initialState, {pipelines: pipelines});
    const state = pipelineReducer(_initialState, new PackageBuildsAction(pipeline, packageBuilds));
    expect(state.pipelines.length).toEqual(pipelines.length);
    expect(state.pipelines[0].key).toEqual(pipelines[0].key);
    expect(state.pipelines[0].packageBuilds).toEqual(packageBuilds);
  });
})
