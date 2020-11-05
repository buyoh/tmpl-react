import { FoobarState, FoobarActionTypes, UPDATE_INCREMENT, UPDATE_DECREMENT } from './types';

const initialState: FoobarState = {
  value: 5,
};

export function foobarReducer(
  state = initialState,
  action: FoobarActionTypes
): FoobarState {
  switch (action.type) {
    case UPDATE_INCREMENT:
      return {
        value: state.value + 1,
      };
    case UPDATE_DECREMENT:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
}
