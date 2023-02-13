import { PayloadAction } from "@reduxjs/toolkit";
import { RandomArticlesState } from "./random-articles.state";
import { RandomArticlesCallTypes } from "./random-articles.call-types";
import { CustomError } from "@/types/error";
import { RequestStatus } from "@/types/request-status";

export const randomArticlesReducers = {
  startCall: (
    state: RandomArticlesState,
    { payload }: PayloadAction<{ callType: RandomArticlesCallTypes }>
  ) => {
    state[payload.callType] = RequestStatus.LOADING;
  },
  getRandomArticles: (
    state: RandomArticlesState,
    {
      payload,
    }: PayloadAction<{
      randomArticles: unknown[] | null;
      error: CustomError | null;
    }>
  ) => {
    state.randomArticles = payload.randomArticles;
    state.getRandomArticlesError = payload.error;

    state.getRandomArticlesStatus = payload.error
      ? RequestStatus.FAILED
      : RequestStatus.COMPLETED;
  },
};
