import { call, put } from "typed-redux-saga";
import { takeEvery } from "redux-saga/effects";

import {
  fetchedDataResponse,
  createJobSuccess,
  isStateLoading,
} from "./actions";
import {
  GEOCODE_REQUEST,
  IGeocodeRequest,
  CREATE_JOB_REQUEST,
  ICreateJobRequest,
} from "./types";
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

function* createJobRequestApi({ payload: { addresses } }: ICreateJobRequest) {
  yield* put(isStateLoading(true));

  try {
    const response = yield* call(api.createJob, addresses);
    if (response) {
      yield* put(createJobSuccess(true));
    }
  } catch (error) {
    yield* put(createJobSuccess(false));
  } finally {
    yield put(isStateLoading(false));
  }
}

export function* flow() {
  yield takeEvery(CREATE_JOB_REQUEST, createJobRequestApi);
  yield takeEvery(GEOCODE_REQUEST, geocodeRequestApi);
}
