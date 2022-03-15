import { ActionReducerMap } from '@ngrx/store';
import { loadingReducer, LoadingStateInterface } from './loading.reducer';

export interface AppState {
  loading: LoadingStateInterface;
}

export const reducers: ActionReducerMap<AppState, any> = {
  loading: loadingReducer
};
