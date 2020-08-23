import { SET_WEB3 } from './types';
const initialState = {
  contract: {},

};

export default function rootReducer(state = initialState, action) {
  // console.log('In offer Reducer', action.payload);
  const { type } = action;
  switch (type) {
    case SET_WEB3: {
      return {
        // ...state,
        web3: action.payload.web3,
        accounts: action.payload.accounts,
        contract: action.payload.contract,
      };
    }
    // case FIELD: {
    //   return {
    //     // ...state,
    //     web3: action.payload.web3,
    //     accounts: action.payload.accounts,
    //     contract: action.payload.contract,
    //   };
    // }
    default: {
      return state;
    }
  }
}
