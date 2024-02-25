import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";
// import "@splidejs/react-splide/css/core";

import { CarouselProps } from "../App";

interface CarouselComponentProps {
  props: CarouselProps;
}

// const options = {
//   type: "loop",
//   gap: "1rem",
//   autoplay: true,
//   pauseOnHover: false,
//   resetProgress: false,
//   height: "15rem",
// };

const optionsForVertical = {
  wheel: true,
  type: "loop",
  gap: "1rem",
  autoplay: true,
  pauseOnHover: false,
  resetProgress: false,
  height: "100vh",
  width: "375px",
  arrows: "false",
  direction: "ttb",
  // perPage: 1,
  breakpoints: {
    500: {
      width: "100%",
    },
  },
};

// const slideOptions = {
//   width: "100%",
//   rewind: true,
//   autoplay: "true",
//   perPage: 3,
//   perMove: "1",
//   gap: "2rem",
//   height: "15rem",
//   type: "loop",
//   rewindSpeed: "1000",
//   arrows: "true",
//   pagination: "false",
//   drag: true,
//   focus: "center",
//   extensions: { AutoScroll },
//   autoScroll: {
//     speed: -1,
//     pauseOnHover: true,
//     pauseOnFocus: false,
//   },
//   breakpoints: {
//     1000: {
//       perPage: 1,
//     },
//   },
// };

const Carousel: React.FC<CarouselComponentProps> = ({ props }: CarouselComponentProps) => {
  return (
    <Splide options={optionsForVertical} aria-labelledby="autoplay-example-heading" hasTrack={false}>
      <SplideTrack>
        {props.images.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt={`Image ${index}`} style={props.style} />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__progress bg-[#ccc] ">
        <div className="splide__progress__bar bg-red-500 h-[10px] " />
      </div>
    </Splide>
  );
};

export default Carousel;
