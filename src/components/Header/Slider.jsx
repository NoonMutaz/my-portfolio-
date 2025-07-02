import { useState } from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Header3 from "./Header3";
// import Products from "../Product/Products";

export default function Slider({ onScrollToProducts }) {
  const [slide, setSlide] = useState(1);

  return (
    <div className="flex items-center justify-center pt-14 p-[3%] w-full h-full">
      <div className="carousel mb-9 w-full">
        {/* Slide 1 */}
        <div className={`carousel-item relative w-full ${slide === 1 ? "" : "hidden"}`}>
          <Header onScrollToProducts={onScrollToProducts} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <button
              type="button"
              className="btn btn-circle bg-red-500 z-10"
              onClick={() => setSlide(3)}
            >
              ❮
            </button>
            <button
              type="button"
              className="btn btn-circle bg-red-500 z-10"
              onClick={() => setSlide(2)}
            >
              ❯
            </button>
          </div>
        </div>
        {/* Slide 2 */}
        <div className={`carousel-item relative w-full ${slide === 2 ? "" : "hidden"}`}>
          <Header2 />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn btn-circle bg-red-500 z-10"
              onClick={() => setSlide(1)}
            >
              ❮
            </button>
            <button
              className="btn btn-circle bg-red-500 z-10"
              onClick={() => setSlide(3)}
            >
              ❯
            </button>
          </div>
        </div>
        {/* Slide 3 */}
        <div className={`carousel-item relative w-full ${slide === 3 ? "" : "hidden"}`}>
          <Header3 />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn btn-circle bg-red-500"
              onClick={() => setSlide(2)}
            >
              ❮
            </button>
            <button
              className="btn btn-circle bg-red-500"
              onClick={() => setSlide(1)}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}