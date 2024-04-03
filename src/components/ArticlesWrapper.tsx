import { useFetchNews } from "../services/useFetchNews";
import SingleArticle from "./SingleArticle";

const ArticlesWrapper = () => {
  const { news, loading, error } = useFetchNews();

  if (loading) return <div>Loading...</div>
  if (error) return <div>Failed to get articles from the API</div>

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {news.map(article => <SingleArticle key={article.id} article={article} />)}
    </div>
  );
};

export default ArticlesWrapper;
