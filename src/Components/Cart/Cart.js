import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="">
      {cartItems.map((item) => {
        return (
          <div key={item?.id} className="flex justify-center">
            <div><h1>{item.name}</h1>
            <h3>{item.price}</h3></div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
