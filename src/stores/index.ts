import { createStore, combineReducers } from 'redux';
import { foobarReducer } from './foobar/reducers';

export const rootReducer = combineReducers({
  foobar: foobarReducer,
});

export const rootStore = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
