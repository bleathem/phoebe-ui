import { Pipeline, PackageBuild, TestSuite } from './pipeline.model';
import { Actions, PIPELINES, PIPELINE, PACKAGE_BUILDS, PACKAGE_BUILD, TEST_SUITES } from './pipeline.actions';
import {ActionReducer, Action} from '@ngrx/store';

export interface PipelineState {
  pipelines: Pipeline[];
  selectedPipeline: Pipeline | null;
  selectedPackageBuild: PackageBuild | null;
};

export const initialState: PipelineState = {
  pipelines: [],
  selectedPipeline: null,
  selectedPackageBuild: null,
};

export function pipelineReducer(state = initialState, action: Actions): PipelineState {
  switch (action.type) {
    case PIPELINES:
      return {
        pipelines: action.payload,
        selectedPipeline: null,
        selectedPackageBuild: null,
      };
    case PACKAGE_BUILDS:
      let pipeline = state.pipelines.find(p => p.key === action.payload.pipeline.key);
      pipeline = Object.assign({}, pipeline, { packageBuilds: action.payload.packageBuilds });
      return {
        pipelines: state.pipelines.map(p => p.key === pipeline.key ? pipeline : p),
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: null,
      };
    case PIPELINE:
      return {
        pipelines: state.pipelines,
        selectedPipeline: action.payload,
        selectedPackageBuild: null,
      }
    case PACKAGE_BUILD:
      return {
        pipelines: state.pipelines,
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: action.payload,
      }
    case TEST_SUITES:
      pipeline = state.pipelines.find(p => p.key === action.payload.pipeline.key);
      let packageBuild = pipeline.packageBuilds.find(pb => pb.key === action.payload.packageBuild.key);
      packageBuild = Object.assign({}, packageBuild, { testSuites: action.payload.testSuites });
      const updatedPackageBuilds = pipeline.packageBuilds.map(pb => pb.key === packageBuild.key ? packageBuild : pb);
      pipeline = Object.assign({}, pipeline, { packageBuilds: updatedPackageBuilds });
      return {
        pipelines: state.pipelines.map(p => p.key === pipeline.key ? pipeline : p),
        selectedPipeline: state.selectedPipeline.key === pipeline.key ? pipeline : state.selectedPipeline,
        selectedPackageBuild: state.selectedPackageBuild &&
          state.selectedPackageBuild.key === packageBuild.key ? packageBuild : state.selectedPackageBuild
      }
    default:
    return state;
  }
}
