import { SET_VEHICLE_ARRAY_STATE } from './types';
const initialState = {
  vehicleArray: [],

};

export default function vehicleReducer(state = initialState, action) {
  console.log('In vehicle Reducer', action);
  const { type } = action;
  switch (type) {
    case SET_VEHICLE_ARRAY_STATE: {
      return {
        // ...state,
        vehicleArray: action.payload.valuesArr,
      };
    }
    default: {
      return state;
    }
  }
}
