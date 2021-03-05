import { call, put, takeLatest } from "typed-redux-saga";

import { fetchedDataResponse } from "./actions";
import { GEOCODE_REQUEST, IGeocodeRequest } from "./types";
import api from "./services";

function* geocodeRequestApi({ payload: { address, type } }: IGeocodeRequest) {
  try {
    const response = yield* call(api.geocode, address);
    if (response) {
      yield* put(fetchedDataResponse(response.data, type));
    }
  } catch (error) {
    yield* put(fetchedDataResponse({ status: "error" }, type));
  }
}

export function* flow() {
  yield takeLatest(GEOCODE_REQUEST, geocodeRequestApi);
}
