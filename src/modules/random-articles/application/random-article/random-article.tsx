import { useEffect, useRef } from "react";
import styles from "./random-article.module.css";
import { useOnScreen } from "@/hooks/use-on-screen";
import { RandomArticle as RandomArticleType } from "../../domain/random-articles";
import { RandomArticleImage } from "../random-article-image/random-article-image";

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
      <RandomArticleImage
        imageUrl={randomArticle.image}
        altText={randomArticle.title}
      />
      <aside className={styles.aside}>
        <h2 className={styles.title}>{randomArticle.title}</h2>
        <div className={styles.description}>{randomArticle.description}</div>
        <div className={styles.content}>{randomArticle.content}</div>
      </aside>
      <a
        className={styles.link}
        href={randomArticle.url}
        target="_blank"
        rel="noreferrer"
      >
        <img src={"/wikipedia_logo.svg"} alt="Wikipedia Logo" />
      </a>
    </article>
  );
};
