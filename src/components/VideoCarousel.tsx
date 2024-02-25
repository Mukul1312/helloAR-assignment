import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

interface VideoOptions {
  volume?: number;
  controls?: boolean;
}

interface VideoData {
  video_link: string;
  video_image: string;
}

interface VideoCarouselProps {
  videoData?: VideoData[];
  videoOptions?: VideoOptions;
  videoStyles?: React.CSSProperties;
}

const optionsForVertical = {
  wheel: true,
  //   type: "loop",
  gap: "1rem",
  //   autoplay: true,
  height: "100vh",
  width: "375px",
  direction: "ttb",
  breakpoints: {
    500: {
      width: "100%",
    },
  },
  video: {
    playerOptions: {
      youtube: {
        width: "1280",
        height: "720",
        autoPlay: 1,
        controls: 0,
      },
    },
  },
};

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videoData = [] }) => {
  useEffect(() => {
    const splideArrows = document.getElementsByClassName("splide__arrows")[0] as HTMLElement;
    const splidePagination = document.getElementsByClassName("splide__pagination")[0] as HTMLElement;

    splideArrows.style.display = "none";
    splidePagination.style.display = "none";

    return () => {
      splideArrows.style.display = "block";
      splidePagination.style.display = "block";
    };
  }, []);

  return (
    <Splide tag="section" options={optionsForVertical} extensions={{ Video }}>
      {videoData.map((videoData, index) => (
        <SplideSlide key={index} data-splide-youtube={`9jqYhAxzJdQ`}>
          <div className="splide__slide__container">
            <img src={videoData.video_image} alt={`Video ${index + 1}`} className="" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default VideoCarousel;
