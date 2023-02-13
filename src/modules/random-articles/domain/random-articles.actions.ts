import { RandomArticlesOutput } from "./random-articles.output";
import { randomArticlesSlice } from "@/modules/random-articles/domain/random-articles.slice";
import { RandomArticlesCallTypes } from "@/modules/random-articles/domain/random-articles.call-types";
import { CustomError } from "@/types/error";

const { actions } = randomArticlesSlice;

export const getRandomArticles =
  () =>
  async (
    dispatch: any,
    _: any,
    { randomArticlesOutput }: { randomArticlesOutput: RandomArticlesOutput }
  ) => {
    dispatch(
      actions.startCall({
        callType: RandomArticlesCallTypes.GET_RANDOM_ARTICLES,
      })
    );

    const getRandomArticlesRo: {
      randomArticles: unknown[] | null;
      error: CustomError | null;
    } = await randomArticlesOutput.getRandomArticles();

    dispatch(actions.getRandomArticles(getRandomArticlesRo));
  };
