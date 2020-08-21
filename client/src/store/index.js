import { createStore, combineReducers } from 'redux';
import rootReducer from './rootReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default (initialState) => {
  const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    root: rootReducer,
  });
  const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

  return store;
};
