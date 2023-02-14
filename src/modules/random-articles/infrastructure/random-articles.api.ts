import { api } from "@/config/axios-instance";
import { mapToDomainModel } from "../domain/random-articles.mapper";
import { RandomArticlesOutput } from "../domain/random-articles.output";

export class RandomArticlesApi implements RandomArticlesOutput {
  getRandomArticle() {
    return api
      .get("/page/random/summary")
      .then(({ data }) => mapToDomainModel(data));
  }
}
