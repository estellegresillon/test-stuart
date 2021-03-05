import { createSelector } from "reselect";

import { RootState } from ".";
import { IState } from "./reducer";

const selectRootState = (state: RootState) => state.root || {};

export const selectPickup = createSelector(selectRootState, (state: IState) => {
  return state.pickup;
});

export const selectDropoff = createSelector(
  selectRootState,
  (state: IState) => {
    return state.dropoff;
  }
);
