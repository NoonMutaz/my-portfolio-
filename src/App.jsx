import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Contact from "./pages/ContactUs/Contact"
import About from "./pages/About/About"
import NotFound from "./pages/not-found"
import Login  from  "./pages/Login/Login"
 
 const App = () => {
   return (
     <div className="min-h-screen pb-[%]" >
    
       <Navbar/>
      

 

<Routes>
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/Cart" element={<Cart/>} ></Route>
  <Route path="/PlaceOrder" element={<PlaceOrder/>} ></Route>
  <Route path="/ContactUs" element={<Contact/>} ></Route>
  <Route path="/About" element={<About/>} ></Route>
  <Route path="/login" element={<Login/>} ></Route>
  <Route path="*" element={<NotFound />} ></Route>

</Routes>

     </div>
   )
 }
 
 export default App
 
