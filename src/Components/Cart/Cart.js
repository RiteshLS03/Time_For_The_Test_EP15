import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { ITEM_IMG_CDN_URL } from "../config";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);


  const totalPrice = cartItems.map(item=>item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(totalPrice);
  

  return cartItems == 0 ? (
    <EmptyCart />
  ) : (
    <div className="mx-64 p-10 my-8 border-2">
      {cartItems.map((item,index) => {
        return (
          <div key={item?.id} className="flex justify-center">
            <div className="flex justify-around items-center">
              <h1 className=" flex mx-10"><p className="flex font-bold mx-10">{index+1}</p>{item.name}</h1>
              <h3 className="flex mx-10">
                {item?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item.price / 100)
                  : " "}
              </h3>
              <img className="rounded-2xl w-32 m-2" src={ITEM_IMG_CDN_URL+item.imageId}/>
            </div>
          </div>
        );
      })}
      <h2 className="flex justify-center">To Pay {totalPrice > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(totalPrice / 100)
                  : " "}</h2>
    </div>
  );
};

export default Cart;
