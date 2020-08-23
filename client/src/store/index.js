import { createStore, combineReducers } from 'redux';
import rootReducer from './rootReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (initialState) => {
  const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    root: rootReducer,
  });
  const store = (window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore) : createStore)(
    reducer,
    composeWithDevTools()
  );

  return store;
};
