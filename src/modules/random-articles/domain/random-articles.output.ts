import { CustomError } from "@/types/error";

export interface RandomArticlesOutput {
  getRandomArticles(): Promise<{
    randomArticles: unknown[] | null;
    error: CustomError | null;
  }>;
}
