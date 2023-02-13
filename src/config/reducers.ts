import { combineReducers } from "redux";
import { AnyAction } from "@reduxjs/toolkit";
import { randomArticlesSlice } from "@/modules/random-articles/domain/random-articles.slice";
import { RandomArticlesCallTypes } from "@/modules/random-articles/domain/random-articles.call-types";

export const appReducers = combineReducers({
  [randomArticlesSlice.name]: randomArticlesSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) => {
  return appReducers(state, action);
};
