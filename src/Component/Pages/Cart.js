import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../../Redux/Action/Index";

export default function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart)
  const handleButtonPlus = (product) => {
    dispatch(addCart(product));
  }
  const handleButtonMinus = (product) => {
    dispatch(delCart(product));
  }
  let name=state.reduce ((total,current)=>{
    return total+(current.price*current.qty)
  },0)
  return (
    <div className='container'>
      <div className='row mb-5 mt-5'>
        {state.map((product) => {
          return (
            <div key={product.id}>
              <div className='col-md-6'>
                <img src={product.preview} alt={product.name} height="200px" width='180px' />
              </div>
              <div className='col-md-6'>
                <h3>{product.name}</h3>
                <p className='lead'>{product.qty} X ${product.price} = $ {product.qty * product.price}</p>
                <button className='btn btn-outline-dark' onClick={() => handleButtonMinus(product)}><i className='fa fa-minus'></i></button>
                <button className='btn btn-outline-dark' onClick={() => handleButtonPlus(product)}><i className='fa fa-plus'></i></button>

              </div>
            </div>
          );
        })}

      </div>
      <div className='text-center'>
      <h1>Total Amount { name}</h1>  
      <button className='btn btn-outline-dark mr-2'>Buy Now</button>

      </div>

    </div>
  )
}




