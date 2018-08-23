import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTodo from './todo.reducer';

/**
 * 状態 および Reducer
 */
export { State, reducer } from './todo.reducer';

/**
 * セレクタ
 */
export const getFeatureState = createFeatureSelector<fromTodo.State>('Todo');
export const getLoading      = createSelector(getFeatureState, fromTodo.getLoading);
export const getTodos        = createSelector(getFeatureState, fromTodo.getTodos);
