
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { addCart, delCart, pdelCart } from "../../Redux/Action/Index";

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
  return (
    <div className='container'>
      <div className='row mb-5 mt-5'>
        <div className='col-md-12'>
        {state.map((product) => {
          return (
            <div key={product.id}>
              <div className='row mb-5 mt-5'>
              <div className='col-md-3'>
                <img src={product.preview} alt={product.name} height='250px' width='100%' />
              </div>
              <div className='col-md-3 mt-5'>
                <h3>{product.name}</h3>
              </div>
              <div className='col-md-3 mt-5'>
                <button className='btn btn-outline-dark mr-3' onClick={() => handleButtonMinus(product)}><i className='fa fa-minus'></i></button>
                <button className='btn btn-outline-dark mr-3' onClick={() => handleButtonPlus(product)}><i className='fa fa-plus'></i></button>
                <button className='btn btn-outline-dark'onClick={()=>deleteuser(product.id)}> Delete</button>
              </div>
              <div className='col-md-3 mt-5'>
              <b><p className='lead price-cart'>{product.qty} X ${product.price} = $ {product.qty * product.price}</p></b>  
              </div>
              </div>
            </div>
          );
        })}
</div>
      </div>

      <div className='text-center'>
        <h1>Total Amount  ${name}</h1>
        <button className='btn btn-outline-dark mr-2'>Buy Now</button>

      </div>

    </div>
  )
}




