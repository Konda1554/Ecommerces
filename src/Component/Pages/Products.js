import React, { memo, useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Home.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
//   let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product");
      
        setData(await response.clone().json());
        setFilter(await response.json());
        
        setLoading(false);
    
     
    //   return () => {
    //     componentMounted = false;
    //   };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
      <h1>Loading.....</h1>
        {/* <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div> */}
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.isAccessory
    === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            
              <div className="col-md-3 mb-5"  key={product.id}>
                <div className="card h-100 text-center p-4">
                  <img
                    className="card-img-top"
                    src={product.preview
                    }
                    alt={product.name
                    }
                    height="250px"
                  />
                  <div className="card-body">
                    <h6 className="card-title mb-0">
                      {product.name
.substring(0, 12)}....
                    </h6>
                    <p className="card-text lead price">${product.price}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn--border btn-read btn--animated "
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container  my-5 py-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className=" text-center mb-5 products-title">
              <b>Latest Products</b>
            </h1>
            <hr />
          </div>
        </div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn  mr-2"
            onClick={() => setFilter(data)}
          >
            All
          </div>
          <div
            className="btn  mr-2"
            onClick={() => filterProduct(true)}
          >
            Accessory

          </div>
          <div
            className="btn mr-2"
            onClick={() => filterProduct(false)}
          >
            Clothing
          </div>
         
         
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default memo(Products)  ;
