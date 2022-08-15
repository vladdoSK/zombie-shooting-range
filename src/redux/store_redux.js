import { createStore } from 'redux'
import { rootReducer } from './reducer';

export const store_redux = createStore(rootReducer);

