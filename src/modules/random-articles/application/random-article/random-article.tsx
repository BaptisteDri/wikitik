import { useEffect, useRef } from "react";
import styles from "./random-article.module.css";
import { useOnScreen } from "@/hooks/use-on-screen";

interface Props {
  article: unknown;
}

export const RandomArticle = ({ article }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(ref);

  useEffect(() => {
    console.log(isVisible, article);
  }, [isVisible]);

  return (
    <article ref={ref} className={styles.container}>
      Je suis un bel article stylé
    </article>
  );
};
