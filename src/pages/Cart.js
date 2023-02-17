import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((products) => {
          return (
            <div className="cartCard" key={products.id}>
              <img src={products.image} alt="" />
              <h5>{products.title}</h5>
              <h5>{products.price}</h5>
              <button className="btn" onClick={() => handleRemove(products.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
