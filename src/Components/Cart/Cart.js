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
    <div className="flex mx-64 p-10 my-8 xl:my-2 border-2 ">
      <table className="table-auto">
        <thead >
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((Item, index) => {
            return (
              
                <tr>
                  <td>{index + 1}</td>
                  <td>{Item?.name}</td>
                  <td>
                    {Item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(Item?.price / 100)
                      : " "}
                  </td>
                </tr>
              
            );
          })}
        </tbody>
      </table>
      <h2 className="flex justify-center">
        To Pay
        {totalPrice > 0
          ? new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(totalPrice / 100)
          : " "}
      </h2>
    </div>
  );
};

export default Cart;
