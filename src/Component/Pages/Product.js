import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../Redux/Action/Index";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Product = () => {
  const { id } = useParams();
const [buttonText,setButtonText]= useState('Add To Cart')
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (buttonText === 'Add To Cart') {
    dispatch(addCart(product));
    setButtonText ('Added') 
    toast.success("Added to Cart")
  }
  else toast.error ('Product already added')
    
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`);
      setProduct(await response.json());
      setLoading(false);
      
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <>Loading ....</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6  ">
          <img
            src={product.preview}
            alt={product.name}
            width='80%'
          />
        </div>
        <div className="col-md-6 mt-5 ">
          {/* <h4 className="text-uppercase ">{product.category}</h4> */}
          <h1 className="mt-2">{product.name}</h1>
          <h1 className="lead">
            <b>
             {product.brand}
              
            </b>
          </h1>
          <h3>${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark mr-3"
            onClick={() => addProduct(product)}
          >
           {buttonText}
          </button>
          <Link to="/cart">
            {" "}
            <button className="btn btn-outline-dark">Go to Cart</button>
          </Link>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="caontainer p-5">
        <div className="row p-5">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
