
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../cartContext";

const Cart1 = () => {
  let total=0;
  const [products, setProducts] = useState([]);
  const { cart1 , setCart1 } = useContext(CartContext);
  const [priceFetched, togglePriceFetched] = useState(false);
  //  console.log('CartObj=',cart1)

  useEffect(() => {
    if (!cart1.items) {
      return;
    }
    // console.log('cartObjectArray=', Object.keys(cart1.items))

     if(priceFetched){
      return;
     } 

    fetch("/api/products/cart-items", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ids: Object.keys(cart1.items) })
    }).then(resp => resp.json())
      .then( products => {
        setProducts(products);
        togglePriceFetched(true);
      });
  }, [cart1, priceFetched]);
  
  let getQty=(productId)=>{
    return cart1.items[productId];
    
      }
      
      const increment=(productId)=>{
        const existingQty = cart1.items[productId];
        const _cart= {...cart1};
        _cart.items[productId]= existingQty + 1;
        _cart.totalItems += 1;
        setCart1(_cart)
      }
      
      const decrement=(productId)=>{
        const existingQty= cart1.items[productId];
        if(existingQty===1){
          return;
        }
        
        const _cart = {...cart1};
        _cart.items[productId]= existingQty - 1;
        _cart.totalItems -= 1;
        setCart1(_cart);
      }
      
      const getSum= (productId,price)=>{
        const sum = price * getQty(productId)
      total += sum;
      return sum;
    }

    const handleDelete=(productId)=>{
      const _cart = {...cart1};
      const qty = _cart.items[productId];
      delete _cart.items[productId];
      _cart.totalItems -= qty;
      setCart1(_cart);
      const updatedProductsList= products.filter((product)=> product._id !== productId);
      setProducts(updatedProductsList);

    }

    const handleOrderNow=()=>{
      window.alert('Order placed successfully')

      setProducts([]);
      setCart1({})
    }



  return (
    !products.length
    ? <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" alt="" />
    :

    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart Items</h1>
      <ul>
        {
         products.map( product => {  
          return (
            <li key={product._id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-16" src={product.image} alt="" />
                  <span className="font-bold ml-4 w-48">{product.name}</span>
                </div>
                <div>
                  <button onClick={()=> decrement(product._id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    -
                  </button>
                  <b className="px-4">{getQty(product._id)}</b>
                  <button onClick={()=> increment(product._id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    +
                  </button>
                </div>
                <span>$ { getSum(product._id, product.price) }</span>

  <button onClick={()=> {handleDelete(product._id)}} className="bg-red-500 px-4 py-2 rounded-full leading-none">
                  Delete
                </button>
              </div>
            </li>
          )
         })
        }
      </ul>
      <hr className="my-6" />

      <div className="text-right">
        <b>Grand Total:</b> $ { total }
      </div>
      <div className="text-right mt-6">
        <button onClick={handleOrderNow} className="bg-red-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  )
}

export default Cart1;
