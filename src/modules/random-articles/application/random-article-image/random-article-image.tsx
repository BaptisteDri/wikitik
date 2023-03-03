import styles from "./random-article-image.module.css";

interface Props {
  imageUrl: string;
  altText: string;
}

export const RandomArticleImage = ({ imageUrl, altText }: Props) => (
  <div className={styles.wrapper}>
    <img src={imageUrl} alt={`${altText} picture`} className={styles.image} />
  </div>
);
