import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { ITEM_IMG_CDN_URL } from "../config";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const totalPrice = cartItems
    .map((item) => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(totalPrice);

  return cartItems == 0 ? (
    <EmptyCart />
  ) : (
    <div className="flex mx-64 p-10 sm:mx-8 md: xl:my-2 sm:m-2">
      <table className="w-full border-collapse table-auto border-4">
        <thead>
          <tr>
            <th className="border px-1 py-2">Index</th>
            <th className="border px-1 py-2">Name</th>
            <th className="border px-1 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((Item, index) => {
            return (
              <tr key={index} className="border-2">
                <td className="border px-1 py-2 ">
                 <p> {index + 1}</p>
                </td>
                <td className="border px-1 py-2">
                 <p> {Item?.name}</p>
                </td>
                <td className="border px-1 py-2 flex justify-center ">
                 <p> {Item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(Item?.price / 100)
                    : " "}</p>
                </td>
              </tr>
              
            );
          })}
          <tr className="border my-6">
            <td className="border">{""}</td>
            <td className="border">{""}</td>
            <td className="flex items-center justify-center">
              To Pay
              {totalPrice > 0
                ? new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(totalPrice / 100)
                : " "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
