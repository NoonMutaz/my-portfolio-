//  import "./header.css";
 
 import Login from "./Login"
export default function Btn() {
  return (
    <div  className="flex flex-wrap items-center text-[white] justify-center gap-[32px]">
  

           <button   className="cursor-pointer w-[90px] h-[60px] bg-[white] border-[2px] border-[white]   rounded-[30px] text-[red]  md:w-[90px]   md:h-[60px]">
            Sign Up
        </button>

       {/* <button style={{  boxShadow: "rgba(0, 0, 0, 0.5) 0px -40px 36px -28px inset" }}  className="btnn hover:text-[white]     font-sans font-semibold rounded-[30px] text-[white] bg-[red]  ">
          Login
        </button> */}
        <Login/>




    </div>
  )
}
