
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addCart, delCart, pdelCart } from "../../Redux/Action/Index";
import { useAuth0 } from '@auth0/auth0-react';

export default function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart)
  const handleButtonPlus = (product) => {
    dispatch(addCart(product));
  }
  const handleButtonMinus = (product) => {
    dispatch(delCart(product));
  }
  let name = state.reduce((total, current) => {
    return total + (current.price * current.qty)
  }, 0)
  const deleteuser=(id) =>{
    dispatch(pdelCart(id));
    
  }
  const navigate = useNavigate ()
  const {
    isAuthenticated,loginWithRedirect
   
  } = useAuth0();
  const buynow = () =>{
    if (isAuthenticated){
      navigate('/buy')
    }else{
      loginWithRedirect ()
     
    }
    
  
  }
  return (
    
    <div className='container'>
     
      <div className='row mb-5 mt-5'>
        <div className='col-md-12'>
        <h1>hello</h1>
       
        {state.map((product) => {
          return (
            <div key={product.id}>
              <div className='row mb-5 mt-5'>
              <div className='col-md-3 mt-5'>
                <img src={product.preview} alt={product.name} height='250px' width='100%' />
              </div>
              <div className='col-md-3 '>
                <h3 className='Product-Name'>{product.name}</h3>
              </div>
              <div className='col-md-3 mt-5'>
                <button className='btn btn-outline-dark mr-3 Product-qulty' onClick={() => handleButtonMinus(product)}><i className='fa fa-minus'></i></button>
                <button className='btn btn-outline-dark mr-3 Product-qulty' onClick={() => handleButtonPlus(product)}><i className='fa fa-plus'></i></button>
                <button className='btn btn-outline-dark Product-qulty'onClick={()=>deleteuser(product.id)}> Delete</button>
              </div>
              <div className='col-md-3 mt-5'>
              <b><p className='lead price-cart Product-price'>{product.qty} X ${product.price} = $ {product.qty * product.price}</p></b>  
              </div>
              </div>
            </div>
          );
        })}
</div>
      </div>
        {state.length<1 ? <h1 className='text-center'>No Item in Cart</h1>:
        <div className='text-center'>
        <h1>Total Amount  ${name}</h1>
        <button className='btn btn-outline-dark mr-2 mb-5' onClick={()=> buynow()}>Buy Now</button>

      </div>
        }
      

    </div>
    
  )
}




