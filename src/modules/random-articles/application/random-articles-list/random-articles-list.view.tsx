import styles from "./random-articles-list.module.css";
import { RandomArticle } from "@/modules/random-articles/application/random-article/random-article";
import { RandomArticle as RandomArticleType } from "../../domain/random-articles";

interface Props {
  randomArticles: RandomArticleType[];
  addRandomArticle: () => void;
}

export const RandomArticlesListView = ({
  randomArticles,
  addRandomArticle,
}: Props) => {
  return (
    <div className={styles.container}>
      {randomArticles ? (
        randomArticles.map((randomArticle, i) => (
          <RandomArticle
            randomArticle={randomArticle}
            addRandomArticle={addRandomArticle}
            key={i}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
