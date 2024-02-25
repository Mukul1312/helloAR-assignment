import "./App.css";
import "@splidejs/react-splide/css";
import Carousel from "./components/Carousel";
import { useImage } from "./utils/hooks";

export interface CarouselProps {
  images: string[];
  style: React.CSSProperties;
}

function App() {
  const {
    data: images,
    error,
    loading,
  } = useImage({ category: "nature", totalImagesPerPage: 10, imageQuality: "portrait" });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (!images) {
    return <h1>No images found</h1>;
  }

  const props: CarouselProps = {
    images,
    style: {
      // width: "100%",
      height: "100%",
      // height: "200px",
      // objectFit: "cover",
    },
  };

  return (
    <div
      className="bg-black-500"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <Carousel props={props} />
    </div>
  );
}

export default App;
