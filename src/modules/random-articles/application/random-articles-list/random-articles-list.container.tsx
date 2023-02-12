import { useState } from "react";
import { RandomArticlesListView } from "./random-articles-list.view";

export const RandomArticlesListContainer = () => {
  const [articles, setArticles] = useState<unknown[]>([1, 2]);

  return <RandomArticlesListView articles={articles} />;
};
