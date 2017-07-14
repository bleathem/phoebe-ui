import {initialState, pipelineReducer} from './pipeline.reducer';
import { Pipeline, PackageBuild, TestSuite } from './pipeline.model';
import { Actions,
  LOAD_PIPELINES, SELECT_PIPELINE, LOAD_PACKAGE_BUILDS, SELECT_PACKAGE_BUILD, LOAD_TEST_SUITES,
  LoadPipelinesAction, LoadPackageBuildsAction, SelectPipelineAction, SelectPackageBuildAction, LoadTestSuitesAction
} from './pipeline.actions';

describe('pipelineReducer', () => {
  it('should handle initialState', () => {
    let initialState = pipelineReducer.call({}, undefined, {type: null});
    expect(initialState.pipelines.length).toEqual(0);
  });

  it('should load pipelines', () => {
    let pipelines = [ new Pipeline('asd', 123) ];
    let state = pipelineReducer(undefined, new LoadPipelinesAction(pipelines));
    expect(state.pipelines.length).toEqual(pipelines.length);
  });

  it('should load packageBuilds', () => {
    let pipeline = new Pipeline('asd', 123);
    let pipelines = [ Object.freeze(Object.assign({}, pipeline)) ];
    let packageBuilds = [ new PackageBuild(345, 234) ];
    let _initialState = Object.assign({}, initialState, {pipelines: pipelines});
    let state = pipelineReducer(_initialState, new LoadPackageBuildsAction(pipeline, packageBuilds));
    expect(state.pipelines.length).toEqual(pipelines.length);
    expect(state.pipelines[0].key).toEqual(pipelines[0].key);
    expect(state.pipelines[0].packageBuilds).toEqual(packageBuilds);
  });
})
