import { Article } from "../types/Article";
import useFakeTitle from "../services/useFakeTitle";
import defaultImage from "../assets/default_image.webp";
import useFakeImage from "../services/useFakeImage";
import "../style/spinner.css";

type SingleArticleProps = {
  article: Article;
};

const SingleArticle = ({ article }: SingleArticleProps) => {
  const { fakeTitle, isLoading: isTitleLoading } = useFakeTitle(article);
  const { imageUrl, isLoading: isImageLoading } = useFakeImage(fakeTitle);

  return (
    <div className="border rounded-xl">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <img
          src={imageUrl || defaultImage}
          alt={fakeTitle || ""}
          className="rounded-t-xl object-cover w-full h-12 lg:h-80"
        />

        {isImageLoading && <div className="spinner"></div>}
      </a>

      <div className="p-4 overflow-hidden">
        <span className="text-sm bg-slate-300 rounded-lg px-2 py-1">
          {article.category}
        </span>

        <h2 className="font-bold mb-4 mt-2 h-12 overflow-hidden text-ellipsis line-clamp-2 hover:underline">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Real title: {article.title}
          </a>
        </h2>

        <h2 className="font-bold mb-4 mt-2 h-12 overflow-hidden text-ellipsis line-clamp-2 hover:underline">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Fake title:{" "}
            {isTitleLoading
              ? "Loading..."
              : fakeTitle || "Did not succeed to get the fake title"}
          </a>
        </h2>
        <p className="mb-2">
          <span className="font-bold">Published:</span> {article.date}
        </p>
        <div>
          <a
            href={article.source}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500 font-bold"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
