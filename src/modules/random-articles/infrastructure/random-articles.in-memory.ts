import { RandomArticlesOutput } from "../domain/random-articles.output";

export class RandomArticlesInMemory implements RandomArticlesOutput {
  private randomArticles: unknown[] | undefined = [];

  getRandomArticles(): Promise<unknown> {
    if (!this.randomArticles) {
      throw new Error("An error occurred while getting random articles");
    }

    return Promise.resolve(this.randomArticles);
  }
}
