import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTodo from './todo.reducer';
import * as fromSearch from './search.reducer';

/**
 * 状態
 */
export interface State {
  todo: fromTodo.State;
  search: fromSearch.State;
}

/**
 * Reducerのマップ
 */
export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
  search: fromSearch.reducer,
};

/**
 * セレクタ
 */
export const getFeatureState = createFeatureSelector<State>('Todo');

// Todo用
export const getTodoState = createSelector(getFeatureState, state => state.todo);
export const getLoading   = createSelector(getTodoState, fromTodo.getLoading);
export const getTodos     = createSelector(getTodoState, fromTodo.getTodos);

// Search用
export const getSearchState = createSelector(getFeatureState, state => state.search);
