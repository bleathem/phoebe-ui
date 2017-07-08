import { Pipeline, PackageBuild, TestCase } from './pipeline.model';
import { Actions, LOAD_PIPELINES, SELECT_PIPELINE, LOAD_PACKAGE_BUILDS, SELECT_PACKAGE_BUILD, LOAD_TEST_CASES } from './pipeline.actions';
import {ActionReducer, Action} from "@ngrx/store";

export interface PipelineState {
  pipelines: Pipeline[];
  selectedPipeline: Pipeline | null;
  selectedPackageBuild: PackageBuild | null;
  testCases: TestCase[] | null;
};

export const initialState: PipelineState = {
  pipelines: [],
  selectedPipeline: null,
  selectedPackageBuild: null,
  testCases: null
};

export function pipelineReducer(state = initialState, action: Actions): PipelineState {
	switch (action.type) {
		case LOAD_PIPELINES:
			return {
        pipelines: action.payload,
        selectedPipeline: null,
        selectedPackageBuild: null,
        testCases: null
      };
    case LOAD_PACKAGE_BUILDS:
      state.pipelines.forEach(_pipeline => {
        if (_pipeline.key = action.payload.key) {
          _pipeline.packageBuilds = action.payload.packageBuilds;
        }
      })
			return {
        pipelines: state.pipelines,
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: null,
        testCases: null
      };
    case SELECT_PIPELINE:
      return {
        pipelines: state.pipelines,
        selectedPipeline: action.payload,
        selectedPackageBuild: null,
        testCases: null
      }
    case SELECT_PACKAGE_BUILD:
      return {
        pipelines: state.pipelines,
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: action.payload,
        testCases: null
      }
    case LOAD_TEST_CASES:
      return {
        pipelines: state.pipelines,
        selectedPipeline: state.selectedPipeline,
        selectedPackageBuild: state.selectedPackageBuild,
        testCases: action.payload
      }
		default:
			return state;
	}
}
