import { ILocation, IAddresses } from "model/ILocation";
import {
  ActionTypes,
  GEOCODE_REQUEST,
  FETCHED_DATA_RESPONSE,
  IS_STATE_LOADING,
  CREATE_JOB_REQUEST,
  CREATE_JOB_SUCCESS,
} from "./types";

export const geocodeRequest = (address: string, type: string): ActionTypes => {
  return {
    type: GEOCODE_REQUEST,
    payload: {
      address,
      type,
    },
  };
};

export const fetchedDataResponse = (
  data: ILocation | null,
  type: string
): ActionTypes => {
  return {
    type: FETCHED_DATA_RESPONSE,
    payload: {
      data,
      type,
    },
  };
};

export const createJobRequest = (addresses: IAddresses): ActionTypes => {
  return {
    type: CREATE_JOB_REQUEST,
    payload: {
      addresses,
    },
  };
};

export const createJobSuccess = (isJobCreated: boolean): ActionTypes => {
  return {
    type: CREATE_JOB_SUCCESS,
    payload: {
      isJobCreated,
    },
  };
};

export const isStateLoading = (isLoading: boolean): ActionTypes => {
  return {
    type: IS_STATE_LOADING,
    payload: {
      isLoading,
    },
  };
};
