import { RandomArticlesOutput } from "@/modules/random-articles/domain/random-articles.output";
import { RandomArticle } from "../domain/random-articles";
import { mapToDomainModel } from "../domain/random-articles.mapper";
import { RandomArticle as InfraModelRandomArticle } from "./random-articles";
import { randomArticleFakes } from "./random-articles.fakes";

export class RandomArticlesInMemory implements RandomArticlesOutput {
  private randomArticle: InfraModelRandomArticle | undefined =
    randomArticleFakes;

  setRandomArticle(randomArticle: InfraModelRandomArticle | undefined): void {
    this.randomArticle = randomArticle ?? undefined;
  }

  getRandomArticle(): Promise<RandomArticle> {
    if (!this.randomArticle) {
      throw new Error("An error occured while fetching random article");
    }

    const randomArticle: RandomArticle = mapToDomainModel(this.randomArticle);

    return Promise.resolve(randomArticle);
  }
}
