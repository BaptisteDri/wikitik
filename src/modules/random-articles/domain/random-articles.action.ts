import { RandomArticle } from "./random-articles";
import { RandomArticlesOutput } from "./random-articles.output";

export const getRandomArticle = async ({
  randomArticlesOutput,
}: {
  randomArticlesOutput: RandomArticlesOutput;
}): Promise<RandomArticle> => {
  try {
    return await randomArticlesOutput.getRandomArticle();
  } catch (error: any) {
    throw new Error(error);
  }
};
