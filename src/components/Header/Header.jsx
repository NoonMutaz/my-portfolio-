import { assets } from "../../assets/assets";
// import { useRef } from "react";
import Btns from "./Btns";
import "./header.css";
export default function Header({onScrollToProducts }) {
 
 
  return (
    <div className=" p-[3%]  w-full h-full ">
      <div className={`w-full header  h-[450px]  bg-cover bg-center  rounded-[20px] flex flex-row font-bold py-[23px] bg-black mb-[10px] px-[25px]`} style={{ backgroundImage: `url(${assets.crousel1})` }}   >
        {/* <img src={assets.burger} className="img max-h-[470px]   sm:max-h-[230px] sm:w-[24%] md:w-[24%] flex flex-wrap  w-[35%]"/> */}
        
  <div className=" header text-lg sm:text-sm flex flex-col items-center justify-center gap-[30px] w-full h-full   text-[white]  font-extrabold mb-[15px] " >
<h2 className="h1 text-4xl font-bold">
  “Vintage, Rusty, Weird — We Sell It All”
</h2>

   <Btns />

<div   onClick={onScrollToProducts } className=" flex items-center justify-center   text-[30px] cursor-pointer  text-outline  ">
  Click  here to Shop Now</div>

        </div>

        </div> 
 
    </div>
  )
}
