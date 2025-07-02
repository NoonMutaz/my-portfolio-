import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Contact from "./pages/ContactUs/Contact"
import About from "./pages/About/About"
import NotFound from "./pages/not-found"
import Login  from  "./pages/Login/Login"
import { useState, useEffect } from "react";
 
 const App = () => {



 const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }



   return (
     <div className=" " >
    
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
 
