import "./App.css";
import "@splidejs/react-splide/css";
import Carousel from "./components/Carousel";
// import { useImage } from "./utils/hooks";

export interface CarouselProps {
  img_one: string;
  img_two: string;
  img_alt: string;
  style: React.CSSProperties;
}

const props: CarouselProps = {
  img_one:
    "https://images.creativefabrica.com/products/previews/2023/05/11/zZEZKFvQo/2Pdr8is8AS0vymhPaFPB1WOZ7DF-desktop.jpg",
  img_two: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
  img_alt: "image_alt",
  style: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
};

function App() {
  // const images = useImage({ category: "nature", totalImagesPerPage: 10 });
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Basic Carousel
      </h1>

      <div className="App">
        <Carousel props={props} />
      </div>
    </>
  );
}

export default App;
