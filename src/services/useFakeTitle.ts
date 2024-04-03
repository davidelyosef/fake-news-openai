import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Article } from "../types/Article";
import { LOCAL_SERVER } from "../config";

type fakeTitleResponse = {
  fakeTitle: string | null;
  isLoading: boolean;
  error: string | null;
};

export default function useArticleWithFakeTitle(
  article: Article
): fakeTitleResponse {
  const [fakeTitle, setFakeTitle] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post(`${LOCAL_SERVER}/openai/chat`, {
          prompt: `Replace this title with a silly and fake title: "${article.title}"`,
        });
        setFakeTitle(response.data.fakeTitle);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [article.title]);

  return { fakeTitle, isLoading, error };
}
