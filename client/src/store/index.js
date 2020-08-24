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

