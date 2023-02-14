export interface RandomArticle {
  title: string;
  originalimage: {
    source: string;
  };
  description: string;
  extract: string;
  content_urls: {
    desktop: string;
    mobile: string;
  };
}
