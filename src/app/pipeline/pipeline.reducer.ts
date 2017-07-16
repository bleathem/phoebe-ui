import { Pipeline, PackageBuild, TestSuite } from './pipeline.model';
import { Actions, PIPELINES, PIPELINE, PACKAGE_BUILDS, PACKAGE_BUILD, TEST_SUITES } from './pipeline.actions';
import {ActionReducer, Action} from "@ngrx/store";

export interface PipelineState {
  pipelines: Pipeline[];
  selectedPipeline: Pipeline | null;
  selectedPackageBuild: PackageBuild | null;
  testSuites: TestSuite[] | null;
};

export const initialState: PipelineState = {
  pipelines: [],
  selectedPipeline: null,
  selectedPackageBuild: null,
  testSuites: null
};

export function pipelineReducer(state = initialState, action: Actions): PipelineState {
	switch (action.type) {
		case PIPELINES:
			return {
        pipelines: action.payload,
        selectedPipeline: null,
        selectedPackageBuild: null,
        testSuites: null
      };
    case PACKAGE_BUILDS:
      let updatedPipeline = Object.assign({}, action.payload.pipeline, { packageBuilds: action.payload.packageBuilds });
			return {
        pipelines: state.pipelines.map(_pipeline => _pipeline.id === updatedPipeline.id ? updatedPipeline : _pipeline),
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: null,
        testSuites: null
      };
    case PIPELINE:
      return {
        pipelines: state.pipelines,
        selectedPipeline: action.payload,
        selectedPackageBuild: null,
        testSuites: null
      }
    case PACKAGE_BUILD:
      return {
        pipelines: state.pipelines,
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: action.payload,
        testSuites: null
      }
    case TEST_SUITES:
      return {
        pipelines: state.pipelines,
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: state.selectedPackageBuild,
        testSuites: action.payload
      }
		default:
			return state;
	}
}
