import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer, { STATE_KEY } from "./reducer";
import { flow } from "./sagas";

export function* rootSaga() {
  yield fork(flow);
}

const rootReducer = combineReducers({
  [STATE_KEY]: reducer,
});

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  return {
    ...createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export type RootState = ReturnType<typeof rootReducer>;
export default configureStore;
