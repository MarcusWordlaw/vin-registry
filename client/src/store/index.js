import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default (initialState) => {
  console.log('In Nested Index');
  const store = createStore(rootReducer, initialState);

  return store;
};
