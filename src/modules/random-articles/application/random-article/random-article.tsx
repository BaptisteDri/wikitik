import { useEffect, useRef } from "react";
import styles from "./random-article.module.css";
import { useOnScreen } from "@/hooks/use-on-screen";
import { RandomArticle as RandomArticleType } from "../../domain/random-articles";

interface Props {
  randomArticle: RandomArticleType;
  addRandomArticle: () => void;
}

export const RandomArticle = ({ randomArticle, addRandomArticle }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    isVisible && addRandomArticle();
  }, [isVisible]);

  return (
    <article ref={ref} className={styles.container}>
      <h2 className={styles.title}>{randomArticle.title}</h2>
      <div className={styles.description}>{randomArticle.description}</div>
      <img src={randomArticle.image} alt="" className={styles.img} />
      <div className={styles.content}>{randomArticle.content}</div>
    </article>
  );
};
