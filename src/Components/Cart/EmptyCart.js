import React from "react";
import { EmptyCartIMG } from "../config";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="max-w-sm">
        <img className="p-8" src={EmptyCartIMG} />
        <h2 className=" flex justify-center font-semibold text-2xl text-[#535665]">
          Your cart is empty
        </h2>
        <p className=" flex justify-center">
          You can go home page to view more restaurants
        </p>
        <Link to={"/"} className="flex justify-center my-8 bg-[#fc8019] text-slate-50 rounded">
          <button className="p-2">SEE NEARBY RESTAURANTS</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
