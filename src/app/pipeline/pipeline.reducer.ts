import { Pipeline, PackageBuild } from './pipeline.model';
import { Actions, LOAD_PIPELINES, SELECT_PIPELINE, LOAD_PACKAGE_BUILDS, SELECT_PACKAGE_BUILD } from './pipeline.actions';

export interface PipelineState {
  pipelines: Pipeline[];
  selectedPipepline: Pipeline | null;
  selectedPackageBuild: PackageBuild | null;
};

export const initialState: PipelineState = {
  pipelines: [],
  selectedPipepline: null,
  selectedPackageBuild: null
};

export function pipelines(state = initialState, action: Actions): PipelineState {
	switch (action.type) {
		case LOAD_PIPELINES:
			return {
        pipelines: action.payload,
        selectedPipepline: null,
        selectedPackageBuild: null
      };
    case LOAD_PACKAGE_BUILDS:
      state.pipelines.forEach(_pipeline => {
        if (_pipeline.key = action.payload.key) {
          _pipeline.packageBuilds = action.payload.packageBuilds;
        }
      })
			return {
        pipelines: state.pipelines,
        selectedPipepline: state.selectedPipepline,
        selectedPackageBuild: null
      };
    case SELECT_PIPELINE:
      return {
        pipelines: state.pipelines,
        selectedPipepline: action.payload,
        selectedPackageBuild: null
      }
    case SELECT_PACKAGE_BUILD:
      return {
        pipelines: state.pipelines,
        selectedPipepline: state.selectedPipepline,
        selectedPackageBuild: action.payload
      }
		default:
			return state;
	}
}
