import { RootState } from "@/config/store";

export const selectRandomArticles = ({
  randomArticlesSlice,
}: RootState): unknown[] | null => randomArticlesSlice.randomArticles;
