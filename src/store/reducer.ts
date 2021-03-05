import { ILocation } from "model/ILocation";
import { ActionTypes, FETCHED_DATA_RESPONSE } from "./types";

export const STATE_KEY = "root";

export interface IState {
  pickup: ILocation | null;
  dropoff: ILocation | null;
}

const initialState: IState = {
  pickup: null,
  dropoff: null,
};

const updateData = (state: IState, data: ILocation | null, type: string) => {
  if (type === "pickup") {
    return {
      ...state,
      pickup: data,
    };
  } else
    return {
      ...state,
      dropoff: data,
    };
};

export default (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case FETCHED_DATA_RESPONSE:
      return updateData(state, action.payload.data, action.payload.type);

    default:
      return state;
  }
};
