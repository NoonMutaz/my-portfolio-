
 
import { assets } from "../../assets/assets";
import "./header.css";
import Btns from "./Btns";
export default function Header3() {

  
  return (
    <div className=" p-[3%] w-full h-full">
             <div className={`w-full header  h-[450px]  bg-cover bg-center  rounded-[20px] flex flex-row font-bold py-[23px] mb-[10px] px-[25px]`} style={{ backgroundImage: `url(${assets.crousel3})` }}   >    {/* <img src={assets.burger} className="img max-h-[470px]   sm:max-h-[230px] sm:w-[24%] md:w-[24%] flex flex-wrap  w-[35%]"/> */}
        
  <div className=" header text-lg sm:text-sm flex flex-col items-center justify-center gap-[30px] w-full h-full   text-[white]  font-extrabold mb-[15px] " >
<h1 className="text-sm text-wrap h1 font-sans  ">
  Discover the books section
 </h1>
       <button style={{  boxShadow: "rgba(0, 0, 0, 0.5) 0px -40px 36px -28px inset" }}  className="  hover:text-[white] font-sans w-[150px] h-[60px]   text-[18px] rounded-[10px] text-[white] bg-[red]  ">
       Discover more
        </button>
    
    <div className="hidden">
      <Btns />
    </div>

        </div>

        </div> 
 
    </div>
  )
}
