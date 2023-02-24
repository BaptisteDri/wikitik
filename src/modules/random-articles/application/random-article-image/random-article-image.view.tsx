import styles from "./random-article-image.module.css";

interface Props {
  imageUrl: string;
  imageBackgroundColor: string;
}

export const RandomArticleImageView = ({
  imageUrl,
  imageBackgroundColor,
}: Props) => (
  <div
    className={styles.thumbnail}
    style={{
      backgroundImage: `url(${imageUrl})`,
      boxShadow: `0px 0px 50px ${imageBackgroundColor}30`,
    }}
  />
);
