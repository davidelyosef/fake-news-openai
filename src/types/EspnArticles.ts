type Link = {
  href: string;
  text?: string;
}

export type EspnArticle = {
  dataSourceIdentifier: string;
  description: string;
  headline: string;
  images: [];
  published: string;
  type: string;
  links: {web: Link}
}

export type EspnArticles = {
  articles: EspnArticle[];
  header?: string;
  link?: Link;
};
