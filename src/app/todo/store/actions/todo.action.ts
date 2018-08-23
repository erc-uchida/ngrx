import { Action } from '@ngrx/store';
import { Todo } from '../../../models';

/**
 * Actionの種類
 */
export enum TodoActionTypes {
  CreateTodo        = '[Todo] Create',
  CreateTodoSuccess = '[Todo] Create Success',
  CreateTodoFail    = '[Todo] Create Fail',
}

/**
 * 作成
 */
export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CreateTodo;
  constructor(public payload: { todo: Todo } ) {}
}

/**
 * 作成成功
 */
export class CreateTodoSuccess implements Action {
  readonly type = TodoActionTypes.CreateTodoSuccess;
  constructor(public payload: { todo: Todo }) {}
}

/**
 * 作成失敗
 */
export class CreateTodoFail implements Action {
  readonly type = TodoActionTypes.CreateTodoFail;
  constructor(public payload?: { error: any }) {}
}

export type TodoActions =
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoFail;
