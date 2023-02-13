import { RandomArticle } from "@/modules/random-articles/application/random-article/random-article";

interface Props {
  randomArticles: unknown[] | null;
}

export const RandomArticlesListView = ({ randomArticles }: Props) => {
  console.log(randomArticles);

  return (
    <>
      {randomArticles!.map((randomArticles, i) => (
        <RandomArticle randomArticles={randomArticles} key={i} />
      ))}
    </>
  );
};
