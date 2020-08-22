
import { SET_WEB3 } from './types';
const initialState = {
  web3: {},
  accounts: [1],
  contract: {}
};

export default function rootReducer(state = initialState, action) {
  console.log('In offer Reducer', action.payload)
  const { type } = action;
  switch (type) {
    case SET_WEB3: {
      return {
        // ...state,
        // accounts: action.payload.accounts,
        web3: action.payload.contract,
        // contract: action.payload.contract,
      };
    }
    default: {
      return state;
    }
  }
}