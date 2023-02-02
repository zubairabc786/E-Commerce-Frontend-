import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../cartContext';

const Navbar1=()=>{

    // const {name1}=useContext(CartContext)
  const cartStyle={
    background: '#f59e0d',
    display: 'flex',
    padding: '3px 6px',
    borderRadius:'50px'
  }

   const { cart1 }=useContext(CartContext)
//    console.log("NavCart1",cart1)

    return(
        <>
         <nav className='container mx-auto flex items-center justify-between py-4'>
            
                <Link to='/' >
                    <img style={{height: 45}} src='./images/logo.png' alt='Logo' /> 
                </Link>
             <ul className='flex items-center'>
                <li className='mr-6'><Link to='/'>Home</Link></li>
                <li className='mr-6'><Link to='/products1'>Products</Link></li>
                <li>
                 <Link to="/cart1">
                    <div style={cartStyle} >
                        <span style={{fontSize: 30, padding:'3px'}} >
                            {cart1.totalItems ? cart1.totalItems : 0}
                            </span>
                        <img className='ml-2' style={{height:40,color:'white'}} src='/images/cart.png' alt='cart' />
                    </div>
                 </Link>

                </li>
             </ul>


         </nav>
        </>
    )
}

export default Navbar1;