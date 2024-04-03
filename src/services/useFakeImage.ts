import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { LOCAL_SERVER } from "../config";

type fakeImageResponse = {
  imageUrl: string;
  isLoading: boolean;
  error: string | null;
};

export default function useFakeImage(
  fakeTitle: string | null
): fakeImageResponse {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fakeTitle) {
      setImageUrl("");
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post(
          `${LOCAL_SERVER}/openai/generateimage`,
          {
            prompt: `Generate an image based on this text: ${fakeTitle}`,
          }
        );
        setImageUrl(response.data.imageUrl);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fakeTitle]);

  return { imageUrl, isLoading, error };
}
