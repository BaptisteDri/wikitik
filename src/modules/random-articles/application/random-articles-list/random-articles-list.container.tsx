import { useAppSelector } from "@/config/store";
import { RandomArticlesListView } from "./random-articles-list.view";

export const RandomArticlesListContainer = () => {
  const randomArticles: unknown[] = useAppSelector(selectRandomArticles);

  return <RandomArticlesListView randomArticles={randomArticles} />;
};
