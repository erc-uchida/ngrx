import { Todo } from '../../../models';
import { TodoActions, TodoActionTypes } from '../actions';

/**
 * 状態
 */
export interface State {
  loading: boolean;
  todos: Todo[];
}

/**
 * 初期状態
 */
export const initialState: State = {
  loading: false,
  todos: []
};

/**
 * Reducer
 * @param state 現在の状態
 * @param action 発行されたAction
 */
export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.CreateTodo: {
      // 作成
      return { ...state, loading: true };
    }
    case TodoActionTypes.CreateTodoSuccess: {
      // 作成成功したら一覧に追加
      const { todo } = action.payload;
      return { ...state, loading: false, todos: [...state.todos, todo] };
    }
    case TodoActionTypes.CreateTodoFail: {
      // 作成失敗
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
}

/**
 * セレクタ（Storeから特定の状態を取得する）
 */
export const getLoading = (state: State) => state.loading;
export const getTodos = (state: State) => state.todos;
