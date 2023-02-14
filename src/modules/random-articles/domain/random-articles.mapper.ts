import { RandomArticle as InfraModelRandomArticle } from "../infrastructure/random-articles";
import { RandomArticle } from "./random-articles";

export const mapToDomainModel = (
  infraRandomArticle: InfraModelRandomArticle
): RandomArticle => {
  const { content_urls, description, extract, originalimage, title } =
    infraRandomArticle;

  return {
    title,
    url: content_urls.desktop,
    image: originalimage.source,
    content: extract,
    description,
  };
};
