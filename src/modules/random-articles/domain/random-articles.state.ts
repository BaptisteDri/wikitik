import { CustomError } from "@/types/error";
import { RequestStatus } from "@/types/request-status";

export interface RandomArticlesState {
  randomArticles: unknown[] | null;
  getRandomArticlesError: CustomError | null;
  getRandomArticlesStatus: RequestStatus;
}

export const initialState: RandomArticlesState = {
  randomArticles: null,
  getRandomArticlesError: null,
  getRandomArticlesStatus: RequestStatus.IDLE,
};
