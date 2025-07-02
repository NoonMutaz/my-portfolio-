
import { assets } from "../../assets/assets"; 
import "./header.css";
export default function Header2() {

  
  return (
    <div className=" p-[3%] w-full h-full">
         <div className={`w-full header  h-[450px]  bg-cover bg-center  rounded-[20px] flex flex-row font-bold py-[23px] mb-[10px] px-[25px]`} style={{ backgroundImage: `url(${assets.crousel2})` }}   >
        {/* <img src={assets.burger} className="img max-h-[470px]   sm:max-h-[230px] sm:w-[24%] md:w-[24%] flex flex-wrap  w-[35%]"/> */}
        
  <div className=" header text-lg sm:text-sm flex flex-col items-center justify-center gap-[30px] w-full h-full   text-[white]  font-extrabold mb-[15px] " >
<h1 className="h1  text-4xl font-bold">
 sell something?
</h1>
       <button style={{  boxShadow: "rgba(0, 0, 0, 0.5) 0px -40px 36px -28px inset" }}  className=" z-10 hover:text-[white] font-sans w-[150px] h-[60px]  text-[18px] rounded-[10px] text-[white] bg-[red]  ">
          Get Started
        </button>
    

        </div>

        </div> 
 
    </div>
  )
}
