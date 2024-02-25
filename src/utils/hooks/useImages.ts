import { useState, useEffect } from "react";

import { createClient } from "pexels";
const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);

type ImageQuality = "original" | "large2x" | "large" | "medium" | "small" | "portrait" | "landscape" | "tiny";

interface FetchImagesProps {
  category: string;
  totalImagesPerPage: number;
  imageQuality: ImageQuality;
}

interface useImagesProps extends FetchImagesProps {}

async function fetchImages({ category, totalImagesPerPage, imageQuality }: FetchImagesProps) {
  try {
    const response = await client.photos.search({ query: category, per_page: totalImagesPerPage });

    if ("photos" in response) {
      const data = response.photos.map((photo) => photo.src[imageQuality]);
      return data;
    } else {
      throw new Error(JSON.stringify(response));
    }
  } catch (error) {
    console.error(error);
  }
}

export function useImages({ category = "nature", totalImagesPerPage = 10, imageQuality = "original" }: useImagesProps) {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const response = fetchImages({ category, totalImagesPerPage, imageQuality });
    response
      .then((data) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, totalImagesPerPage, imageQuality]);

  return { data, error, loading };
}
