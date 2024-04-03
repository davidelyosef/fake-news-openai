import { useEffect, useState } from "react";
import { API_ESPN_ARTICLES } from "../config";
import { EspnArticle } from "../types/EspnArticles";
import { Article } from "../types/Article";

export const useFetchNews = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(API_ESPN_ARTICLES)
      .then((res) => {
        if (!res.ok)
          throw new Error(`API call failed with status: ${res.status}`);
        return res.json();
      })
      .then((posts) => {
        const articles = posts.articles.map(
          (article: EspnArticle): Article => ({
            id: article.dataSourceIdentifier,
            title: article.headline,
            url: article.links.web.href,
            date: formatDate(article.published),
            category: "Sport",
            source: posts.link?.href,
          })
        );
        setNews(articles);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { news, loading, error };
};

/**
 * Format the date string to DD-MM-YYYY format
 * @param dateString
 * @returns
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
