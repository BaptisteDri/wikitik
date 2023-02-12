import { RandomArticle } from "@/modules/random-articles/application/random-article/random-article";

interface Props {
  articles: unknown[];
}

export const RandomArticlesListView = ({ articles }: Props) => {
  return (
    <>
      {articles.map((article, i) => (
        <RandomArticle article={article} key={i} />
      ))}
    </>
  );
};
