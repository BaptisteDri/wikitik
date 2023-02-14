import { RandomArticle } from "./random-articles";

export interface RandomArticlesOutput {
  getRandomArticle(): Promise<RandomArticle>;
}
