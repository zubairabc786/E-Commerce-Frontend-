import React, { useState, useEffect , useContext } from 'react'
import Product1 from './Product1';
import { CartContext } from '../cartContext';


const Products1=()=>{
   
  const {name,email}=useContext(CartContext)
  // const {email}=useContext(CartContext)
  const [products1,setProducts1]=useState([]);

  //  const [product2,setProduct2]=useState([])



      // useEffect(()=>{

      //   fetch('/api/products')
      //   .then(response => response.json())
        
      //   .then(products1 =>{
        
      //     setProducts1(products1);
          
      //   })

      // },[])

      useEffect(()=>{
        fetch('/api/products')
        .then(resp => resp.json()
          // console.log(resp);
        )
        .then(products1 =>{
          setProducts1(products1)
          // console.log(products1)
        })
      },[])
          

      return(
          
            <div className='container max-auto pb-24'>
                <h1 className='text-lg font-bold my-8'>Products {name} {email}</h1>
                <div className='grid grid-cols-5 my-8 gap-24'>
                 {
                  //  products1.map(product => <Product1 key={product._id} product={product}/>)
                  products1.map( product => <Product1 key={product._id} product1={product}/>)
                  }     
                </div>
                
            </div>
              
    )
}

export default Products1;



