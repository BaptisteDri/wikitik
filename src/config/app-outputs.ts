import { RandomArticlesOutput } from "@/modules/random-articles/domain/random-articles.output";
import { RandomArticlesApi } from "@/modules/random-articles/infrastructure/random-articles.api";
import { RandomArticlesInMemory } from "@/modules/random-articles/infrastructure/random-articles.in-memory";

export type AppOutputs = {
  randomArticlesOutput: RandomArticlesOutput;
};

export const appOutputs: AppOutputs = {
  randomArticlesOutput: new RandomArticlesApi(),
};
