import { useAppSelector } from "@/config/store";
import { selectRandomArticles } from "../../domain/random-articles.selectors";
import { RandomArticlesListView } from "./random-articles-list.view";

export const RandomArticlesListContainer = () => {
  const randomArticles: unknown[] | null = useAppSelector(selectRandomArticles);

  return <RandomArticlesListView randomArticles={randomArticles} />;
};
