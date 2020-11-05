import { FoobarActionTypes, UPDATE_DECREMENT, UPDATE_INCREMENT } from './types';

export function increment(): FoobarActionTypes {
  return {
    type: UPDATE_INCREMENT
  };
}

export function decrement(): FoobarActionTypes {
  return {
    type: UPDATE_DECREMENT
  };
}