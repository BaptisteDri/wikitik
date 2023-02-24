import { useEffect, useState } from "react";
import { RandomArticleImageView } from "./random-article-image.view";
import { useColor } from "color-thief-react";

interface Props {
  imageUrl: string;
}

export const RandomArticleImageContainer = ({ imageUrl }: Props) => {
  const [imageBackgroundColor, setImageBackgroundColor] =
    useState<string>("#a7a9be");

  const { data } = useColor(imageUrl, "hex", {
    quality: 5,
    crossOrigin: "",
  });

  useEffect(() => {
    data && setImageBackgroundColor(data);
  }, [data]);

  return (
    <RandomArticleImageView
      imageUrl={imageUrl}
      imageBackgroundColor={imageBackgroundColor}
    />
  );
};
