import { SET_WEB3 } from './types';
const initialState = {
  contract: {},

};

export default function webReducer(state = initialState, action) {
  console.log('In web3 Reducer', action);
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
    default: {
      return state;
    }
  }
}
