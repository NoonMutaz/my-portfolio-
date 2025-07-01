import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Menu = () => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button text-[red]">
         |||
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content   text-black menu bg-base-100 rounded-box z-1 w-[152px] p-2 shadow-sm"
      >
        <li><a>Cars</a></li>
        <li><a>Furniture</a></li>
        <li><a>Clothing</a></li>
        <li><a>Random</a></li>
        <li><a>Free</a></li>
        <li><a>Art</a></li>
        <li><a>Books</a></li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full sm:p-[1px] fixed sm:text-[10px] pl-[5px] z-50 top-0 left-0   mb-[20px] bg-[black] px-[12px] h-[70px] justify-between text-[white] flex items-center sm:text-[14px]">
        <ul className="sm:text-xs sm:gap-[20px] flex p-2 list-none gap-[25px]">
        
         <li
            onClick={() => setMenu("Menu")}
            className={`${menu === "Menu" ? "active text-[red]" : ""} cursor-pointer text-[18px]`}
          >
            <Menu />
          </li>
        
        
        
          <li
            onClick={() => {
              setMenu("Home");
              navigate('/');
            }}
            className={`${menu === "Home" ? "active text-[red]" : ""} cursor-pointer text-[18px] ml-[2px]`}
          >
            Dusty Bazzar
          </li>

         

          <li
            onClick={() => setMenu("Contact")}
            className={`${menu === "Contact" ? "active text-[red]" : ""} cursor-pointer text-[18px]`}
          >
            Contact
          </li>

          <li
            onClick={() => {
              setMenu("About us");
              navigate('/about');
            }}
            className={`${menu === "About us" ? "active text-[red]" : ""} cursor-pointer text-[18px]`}
          >
            About
          </li>
        </ul>

     

        <div className="flex gap-[20px] items-center mr-[32px]">
          <img src={assets.search} alt="Search Icon" className="relative search" />
          <div className="basket">
            <img src={assets.basket} alt="Basket Icon" />
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
