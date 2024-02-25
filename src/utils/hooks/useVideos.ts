import { useState, useEffect } from "react";

import { createClient } from "pexels";
const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);

interface FetchVideoProps {
  category: string;
  totalImagesPerPage: number;
  type: "photos" | "videos";
}

interface useVideoProps extends FetchVideoProps {}

async function fetchVideos({ category, totalImagesPerPage, type }: FetchVideoProps) {
  try {
    const response = await client[type].search({
      query: category,
      per_page: totalImagesPerPage,
      orientation: "portrait",
      size: "large",
    });

    if ("videos" in response) {
      const data = response.videos.map((video) => {
        const obj = {
          video_link: video.video_files[video.video_files.length - 1].link,
          video_image: video.image,
        };
        return obj;
      });
      console.log(data);
      return data;
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
  }
}

export function useVideos({ category = "nature", totalImagesPerPage = 10, type }: useVideoProps) {
  const [data, setData] = useState([
    {
      video_link: "",
      video_image: "",
    },
  ]);

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const response = fetchVideos({ category, totalImagesPerPage, type });
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
  }, [category, totalImagesPerPage, type]);

  return { data, error, loading };
}
