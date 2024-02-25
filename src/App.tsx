import "./App.css";
import "@splidejs/react-splide/css";
import { useVideos } from "./utils/hooks";
import VideoCarousel from "./components/VideoCarousel";

export interface VideoData {
  video_link: string;
  video_image: string;
}

export interface CarouselProps {
  videos: VideoData[];
  style: React.CSSProperties;
}

function App() {
  const { data: videos, error, loading } = useVideos({ category: "nature", totalImagesPerPage: 10, type: "videos" });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (!videos) {
    return <h1>No images found</h1>;
  }

  return (
    <div className=" bg-slate-800 flex flex-col items-center justify-center h-screen">
      <VideoCarousel videoData={videos} />
    </div>
  );
}

export default App;
