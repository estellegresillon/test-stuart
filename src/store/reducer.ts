import { ILocation } from "model/ILocation";
import {
  ActionTypes,
  FETCHED_DATA_RESPONSE,
  IS_STATE_LOADING,
  CREATE_JOB_SUCCESS,
} from "./types";

export const STATE_KEY = "root";

export interface IState {
  pickup: ILocation | null;
  dropoff: ILocation | null;
  isLoading: boolean;
  isJobCreated: boolean;
}

const initialState: IState = {
  pickup: null,
  dropoff: null,
  isLoading: false,
  isJobCreated: false,
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

    case IS_STATE_LOADING:
      return { ...state, isLoading: action.payload.isLoading };

    case CREATE_JOB_SUCCESS:
      return { ...state, isJobCreated: action.payload.isJobCreated };

    default:
      return state;
  }
};
