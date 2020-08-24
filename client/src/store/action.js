import {
    SET_WEB3,
    SET_VEHICLE_ARRAY_STATE,
  } from './types';

  export const setWeb3State = payload => ({
    type: SET_WEB3,
    payload,
  });

  export const setVehicleArrayState = payload => ({
    type: SET_VEHICLE_ARRAY_STATE,
    payload,
  });