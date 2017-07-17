import { Pipeline, PackageBuild, TestSuite } from './pipeline.model';
import { Actions, PIPELINES, PIPELINE, PACKAGE_BUILDS, PACKAGE_BUILD, TEST_SUITES } from './pipeline.actions';
import {ActionReducer, Action} from "@ngrx/store";

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
      let updatedPipeline = Object.assign({}, action.payload.pipeline, { packageBuilds: action.payload.packageBuilds });
			return {
        pipelines: state.pipelines.map(_pipeline => _pipeline.id === updatedPipeline.id ? updatedPipeline : _pipeline),
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
      let updatedPackageBuild = Object.assign({}, action.payload.packageBuild, { testSuites: action.payload.testSuites });
      let updatedPackageBuilds = action.payload.pipeline.packageBuilds.map(_packageBuild => _packageBuild.key === updatedPackageBuild.key ? updatedPackageBuild : _packageBuild);
      updatedPipeline = Object.assign({}, action.payload.pipeline, { packageBuilds: updatedPackageBuilds });
      return {
        pipelines: state.pipelines.map(_pipeline => _pipeline.id === updatedPipeline.id ? updatedPipeline : _pipeline),
        selectedPipeline: state.selectedPipeline.key === updatedPipeline.key ? updatedPipeline : state.selectedPipeline,
        selectedPackageBuild: state.selectedPackageBuild.key === updatedPackageBuild.key ? updatedPackageBuild: state.selectedPackageBuild
      }
		default:
			return state;
	}
}
