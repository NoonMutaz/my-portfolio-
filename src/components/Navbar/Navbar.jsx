import { assets } from "../../assets/assets";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar fixed z-50   bg-black text-[white]  shadow-sm">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-[black] bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li onClick={() => navigate('/')}><a>Homepage</a></li>
        <li onClick={() => navigate('/ContactUs')}><a>Contact</a></li>
        <li onClick={() => navigate('/About')}><a>About</a></li>
        <div className="h-[2px] mt-1 w-[199px] bg-black"></div>
        <li className="mt-1"><a>Cars</a></li>
        <li><a>Furniture</a></li>
        <li><a>Clothing</a></li>
        <li><a>Random</a></li>
        <li><a>Free</a></li>
        <li><a>Art</a></li>
        <li><a>Books</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="  text-xl">Dusty Bazzar</a>
  </div>
  <div className="navbar-end">

        <div className="flex gap-[20px] items-center mr-[32px]">
          <img src={assets.search} alt="Search Icon" className="relative search" />
          <div className="basket">
            <img src={assets.basket} alt="Basket Icon" />
            <div className="dot"></div>
          </div>   </div>
  </div>
</div>
    </div>
  )
}
