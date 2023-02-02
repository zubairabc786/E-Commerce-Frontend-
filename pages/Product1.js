import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../cartContext";

const Product1 = (props) => {

  const [isAdding, setIsAdding] = useState(false)

  const {cart1, setCart1 } =useContext(CartContext);
  
  const {product1} = props;

  const addToCart=(e, product)=>{

    // console.log(product)
    e.preventDefault()
  //  console.log('product=',product)
   let _cart= {...cart1};
  //  console.log("_cart=",_cart)
   if(!_cart.items){ 
       _cart.items={}
// console.log("Items=",items)
      }
   
   if(_cart.items[product._id]){
     
     _cart.items[product._id] = _cart.items[product._id] + 1 ;
    
    //  console.log("Cart_Items=",_cart.items[product._id])
    
    }  else{
      
      _cart.items[product._id]= 1;
      // console.log("_cart.items[product._id]=",_cart.items[product._id])
   }
   
   

   if(!_cart.totalItems){
    _cart.totalItems=0;
   }

     _cart.totalItems += 1;
   
  
   setCart1(_cart);
  
   
   setIsAdding(true);
   setTimeout(()=>{
     setIsAdding(false);
    },1000)
  }

    //  console.log(product);

  

  return (

    <Link to={`/products/${product1._id}`}>
    <div>
      <img src={product1.image} alt="piza" />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">{product1.name} </h2>
        
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4 ">
          {product1.size}
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>${product1.price}</span>
        <button disabled={isAdding}  onClick={(e)=>{addToCart(e, product1)}} className ={ ` ${isAdding ? 'bg-green-500' : 'bg-yellow-500' } py-1 px-4 rounded-full font-bold `} > Add {isAdding ? 'Ed' : " "} 
        </button>
        {/* <button  onClick={(e)=>{addToCart(e, product)}}  > Add  </button> */}
      </div>
    </div>
    </Link>
    
  );
};

export default Product1;
