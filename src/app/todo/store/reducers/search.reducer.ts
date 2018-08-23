/**
 * 状態
 */
export interface State {
  dummy?: string;
}

/**
 * 初期状態
 */
export const initialState: State = {
};

/**
 * Reducer
 * @param state 現在の状態
 * @param action 発行されたAction
 */
export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
