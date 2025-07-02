import Slider from "../Header/Slider"
import Products from "../Product/Products"
import { useRef } from 'react';

export default function Homepage() {
 const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" ">
            <Slider onScrollToProducts={scrollToProducts}  />
   
            <div ref={productsRef}>
        <Products />
      </div>
{/* <div className="join flex justify-center">

  <input className=" btn btn-square" type="radio" name="options" aria-label="<<" />
  <buttun
    className="join-item btn  btn-square"
    type="radio"
    name="options"
    aria-label="1"
     >1</buttun>

  <input className="join-item btn btn-square" type="radio" name="options" aria-label=">>" />
  
</div> */}

    </div>
  )
}
