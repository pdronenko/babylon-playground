import { Action, createReducer, on } from '@ngrx/store';
import { loading } from './loading.actions';

export interface LoadingStateInterface {
  loading: boolean;
}

export const initialState: LoadingStateInterface = {
  loading: false
};

const _loadingReducer = createReducer(
  initialState,
  on(loading, () => ({ loading: true })),
);

export function loadingReducer(state: LoadingStateInterface = initialState, action: Action) {
  return _loadingReducer(state, action);
}
