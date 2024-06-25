import { createSelector } from "reselect";
import { RootState } from "../store";

const counterSelector = (state: RootState) => state.counter

export const loadCurrentCount = createSelector([counterSelector], (state) => state.count)