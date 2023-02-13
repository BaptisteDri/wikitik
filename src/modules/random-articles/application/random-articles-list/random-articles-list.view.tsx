import { RandomArticle } from "@/modules/random-articles/application/random-article/random-article";

interface Props {
  randomArticles: unknown[];
}

export const RandomArticlesListView = ({ randomArticles }: Props) => {
  return (
    <>
      {randomArticles.map((randomArticles, i) => (
        <RandomArticle randomArticles={randomArticles} key={i} />
      ))}
    </>
  );
};
