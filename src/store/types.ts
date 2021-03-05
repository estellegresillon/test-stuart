import { ILocation } from "model/ILocation";

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

export type ActionTypes = IGeocodeRequest | IFetchedDataResponse;
