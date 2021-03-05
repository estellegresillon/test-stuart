import { ILocation } from "model/ILocation";
import { ActionTypes, GEOCODE_REQUEST, FETCHED_DATA_RESPONSE } from "./types";

export function geocodeRequest(address: string, type: string): ActionTypes {
  return {
    type: GEOCODE_REQUEST,
    payload: {
      address,
      type,
    },
  };
}

export function fetchedDataResponse(
  data: ILocation | null,
  type: string
): ActionTypes {
  return {
    type: FETCHED_DATA_RESPONSE,
    payload: {
      data,
      type,
    },
  };
}
