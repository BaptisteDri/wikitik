import { useEffect, useState } from "react";
import { RandomArticlesListView } from "@/modules/random-articles/application/random-articles-list/random-articles-list.view";
import { RandomArticle } from "../../domain/random-articles";
import { getRandomArticle } from "../../domain/random-articles.action";
import { appOutputs } from "@/config/app-outputs";

export const RandomArticlesListContainer = () => {
  const [randomArticles, setRandomArticles] = useState<RandomArticle[]>([]);
  const { randomArticlesOutput } = appOutputs;

  const addRandomArticle = async () => {
    try {
      const randomArticle: RandomArticle = await getRandomArticle({
        randomArticlesOutput,
      });
      setRandomArticles([...randomArticles, randomArticle]);
    } catch (error: any) {
      if (error.message.split(" ").includes("429")) {
        console.error("too many requests! please, try again later");
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    addRandomArticle();
  }, []);

  return (
    <RandomArticlesListView
      randomArticles={randomArticles}
      addRandomArticle={addRandomArticle}
    />
  );
};
