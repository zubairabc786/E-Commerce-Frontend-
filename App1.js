import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home1 from './pages/Home1';
import Products1 from './pages/Products1';
import Cart1 from './pages/Cart1';
import Navbar1 from './components/Navbar1.js';
import SingleProduct1 from './pages/SingleProduct1';
import { CartContext } from './cartContext';
import { useEffect,useState } from 'react';

const App1=()=>{

    const [cart1,setCart1] = useState({});
    //fetch cart from local storage
      useEffect(()=>{
           const cart1 = window.localStorage.getItem('cart1')
               setCart1(JSON.parse(cart1));
            //    console.log(JSON.parse(cart1))
            //    console.log('cart=',cart1)
             },[]);
 
      useEffect(()=>{
          window.localStorage.setItem('cart1', JSON.stringify(cart1));
      },[cart1])
 
    return(
        <div>
            <BrowserRouter>
            <CartContext.Provider value={{cart1,setCart1}}>
            <Navbar1/>
            <Routes>
            <Route path="/" element={<Home1 />}></Route>
          <Route path="/products" exact element={<Products1 />}></Route>
          <Route path="/products/:_id" element={<SingleProduct1 />}></Route>
          <Route path="/cart1" element={<Cart1 />}></Route>
            </Routes>
            </CartContext.Provider>
            </BrowserRouter>

        </div>
    )
}

export default App1;