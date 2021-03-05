import { ILocation, IAddresses } from "model/ILocation";

export const GEOCODE_REQUEST = "PICKUP_GEOCODE_REQUEST";
export interface IGeocodeRequest {
  type: typeof GEOCODE_REQUEST;
  payload: {
    address: string;
    type: string;
  };
}

export const FETCHED_DATA_RESPONSE = "FETCHED_DATA_RESPONSE";
export interface IFetchedDataResponse {
  type: typeof FETCHED_DATA_RESPONSE;
  payload: {
    data: ILocation | null;
    type: string;
  };
}

export const CREATE_JOB_REQUEST = "CREATE_JOB_REQUEST";
export interface ICreateJobRequest {
  type: typeof CREATE_JOB_REQUEST;
  payload: {
    addresses: IAddresses;
  };
}

export const CREATE_JOB_SUCCESS = "CREATE_JOB_SUCCESS";
export interface ICreateJobSuccess {
  type: typeof CREATE_JOB_SUCCESS;
  payload: {
    isJobCreated: boolean;
  };
}

export const IS_STATE_LOADING = "IS_STATE_LOADING";
export interface IIsStateLoading {
  type: typeof IS_STATE_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export type ActionTypes =
  | IGeocodeRequest
  | IFetchedDataResponse
  | IIsStateLoading
  | ICreateJobRequest
  | ICreateJobSuccess;
