export interface FoobarState {
  value: number;
}

export const UPDATE_INCREMENT = 'foobar/value/increment';
export const UPDATE_DECREMENT = 'foobar/value/decrement';

interface IncrementAction {
  type: typeof UPDATE_INCREMENT;
}

interface DecrementAction {
  type: typeof UPDATE_DECREMENT;
}

export type FoobarActionTypes = IncrementAction | DecrementAction;
