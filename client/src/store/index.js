import { createStore, combineReducers } from 'redux';
import webReducer from './webReducer';
import vehicleReducer from './vehicleReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  webReducer,
  vehicleReducer
})


export default function configureStore(initialState) {
  return createStore(rootReducer, composeWithDevTools(), initialState);
}

// => {
//   const reducer = combineReducers({ rootReducer,
//   });
//   const store = (window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore) : createStore)(
//     reducer,
//     composeWithDevTools()
//   );

//   return store;
// };
