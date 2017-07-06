import { Pipeline } from './pipeline.model';
import { Actions, LoadAction, SelectAction, LOAD_PIPELINES, SELECT_PIPELINE } from './pipeline.actions';

export interface PipelineState {
  pipelines: Pipeline[];
  selectedPipepline: Pipeline | null;
};

export const initialState: PipelineState = {
  pipelines: [],
  selectedPipepline: null,
};

export function pipelines(state = initialState, action: Actions): PipelineState {
	switch (action.type) {
		case LOAD_PIPELINES:
			return {
        pipelines: action.payload,
        selectedPipepline: null
      };
    case SELECT_PIPELINE:
      return {
        pipelines: state.pipelines,
        selectedPipepline: action.payload
      }
		default:
			return state;
	}
}
