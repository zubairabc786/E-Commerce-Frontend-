import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import Products from "./pages/Products.js";
import Cart from "./pages/Cart.js";
import SingleProduct from "./pages/SingleProduct.js";
import { CartContext } from "./cartContext.js";


function App() {
   const [cart,setCart] = useState({});
   //fetch cart from local storage
     useEffect(()=>{
          const cart = window.localStorage.getItem('cart')
              setCart(JSON.parse(cart));
              // console.log(JSON.parse(cart))
            },[]);

     useEffect(()=>{
         window.localStorage.setItem('cart', JSON.stringify(cart));
     },[cart])


  return (
    <div > 
      
      <BrowserRouter>
          {/* <CartContext.Provider value={{cart, setCart, name1:'Muhammad Zubair'}} > */}
             <CartContext.Provider value={{cart, setCart}}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route path="/products/:_id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
          </CartContext.Provider>
          {/* </CartContext.Provider> */}
      </BrowserRouter>
    
    </div>
  );
}

export default App;
