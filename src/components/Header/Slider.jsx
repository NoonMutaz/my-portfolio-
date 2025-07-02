 import Header from "./Header";

  import Header2 from "./Header2";
import Header3 from "./Header3";
// import Products from "../Product/Products";

export default function Slider({onScrollToProducts}) {
 const goToSlide = (e, targetId) => {
  e.preventDefault(); // prevent jump/scroll
  const slide = document.getElementById(targetId);
  slide?.scrollIntoView({ behavior: "smooth", block: "nearest" });
};
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className="carousel     mb-9  w-full">
  <div id="slide1" className="carousel-item relative  w-full">
    <Header onScrollToProducts={onScrollToProducts } />
    {/* <div ref={productsRef}>
        <Products />
      </div> */}
    <div className="absolute   left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
      <button   className="btn btn-circle bg-red-500 z-10"onClick={(e) => goToSlide(e, "slide3")}>❮</button>
      <button   className="btn btn-circle bg-red-500 z-10"onClick={(e) => goToSlide(e, "slide2")}>❯</button>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Header2/>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button   className="btn btn-circle  bg-red-500 z-10"onClick={(e) => goToSlide(e, "slide1")}>❮</button>
      <button  className="btn btn-circle   bg-red-500 z-10"onClick={(e) => goToSlide(e, "slide3")}>❯</button>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <Header3 />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button   className="btn btn-circle  bg-red-500"onClick={(e) => goToSlide(e, "slide2")}>❮</button>
      <button   className="btn btn-circle  bg-red-500"onClick={(e) => goToSlide(e, "slide1")}>❯</button>
    </div>
  </div>
  
</div></div>
  );
}