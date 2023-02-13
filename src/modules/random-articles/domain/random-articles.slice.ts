import { createSlice } from "@reduxjs/toolkit";
import { randomArticlesReducers } from "@/modules/random-articles/domain/random-articles.reducers";
import { initialState } from "@/modules/random-articles/domain/random-articles.state";

export const randomArticlesSlice = createSlice({
  name: "randomArticlesSlice",
  initialState,
  reducers: randomArticlesReducers,
});
