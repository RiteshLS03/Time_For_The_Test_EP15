import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

   return (cartItems == 0)?<EmptyCart/>
    :(
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
