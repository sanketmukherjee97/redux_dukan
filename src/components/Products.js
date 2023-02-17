import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

function Products() {
  const dispatch = useDispatch();
  //   const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADINGL) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((item, index) => {
        return (
          <div className="card" key={products.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button onClick={() => handleAdd(item)} className="btn">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
