import React, { useState } from "react";

import { IMG_CDN_LINK } from "../config";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCaretUpSquare } from "react-icons/bi";
import { GrSquare } from "react-icons/gr";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import MAINRESSHIMMAR from "./MainRestaurantShimmarUI/MAINRESSHIMMAR";
import useRestaurant from "../../utils/useRestaurant";

import "./MainRestaurant.css";
import { logo } from "../../Images";
import { addItem } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const MainRestaurant = () => {
  const params = useParams();
  const { id } = params;
  const [restaurant, menuItems] = useRestaurant(id);

  function isVeg(veg) {
    console.log(veg);
    if (veg === "VEG") {
      return true;
    } else {
      return false;
    }
  }

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item))
  }

  // console.log(useSelector(store.cart.items.length()));

  return !restaurant ? (
    <MAINRESSHIMMAR />
  ) : (
    <>
      {/* Got help from the git repo CHE/NA */}
      <div className="sm:mx-auto:px-auto mx-40">
        <div className="restaurant_summary">
          <div className="main_restaurant_restaurant-header sm:mx-4 md:mx-4 lg:mx-20 xl:mx-20 2xl:mx-56">
            <div className="info_left">
              <h2>{restaurant?.name}</h2>
              <h5 style={{ color: "#7e808c" }} className="text-sm">
                {restaurant?.cuisines?.join(", ")}
              </h5>
              <h5 style={{ color: "#7e808c" }} className="text-sm">
                {restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString}
              </h5>
            </div>
            <div className="info_right">
              <h4 style={{ color: "green" }}>
                <AiFillStar /> {restaurant?.avgRatingString}
              </h4>
              <h6 style={{ color: "#8b8d97" }} className="text-sm">
                {restaurant?.totalRatingsString}
              </h6>
            </div>
          </div>
          {/* Price and Timing */}
          <div className="main_restaurant_restaurant-body sm:mx-4md:mx-4 lg:mx-20 xl:mx-20 2xl:mx-56">
            <div className="main_restaurant_restaurant-body_upper sm:mx-4">
              <h3 className="text-lg ">
                <AiOutlineClockCircle className="mx-2" />
                {restaurant?.sla?.slaString}
              </h3>
              <h3 className="text-lg ">
                <HiOutlineCurrencyRupee className="mx-2" />
                {restaurant?.costForTwoMessage}
              </h3>
            </div>
          </div>
        </div>
        {/* restaurant lists */}
        <div className="restaurant_lists flex justify-between mx-24">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="menu-title">Recommended</h3>
              <h3 className="menu-count">({menuItems.length})Items</h3>
            </div>
            <div className="menu-items-lists py-4">
              {menuItems.map((item) => (
                <div className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <div className="py-2">
                      {isVeg(item?.itemAttribute?.vegClassifier) ? (
                        <GrSquare style={{ color: "	#008000" }} />
                      ) : (
                        <BiCaretUpSquare style={{ color: "#964B00" }} />
                      )}
                    </div>
                    <h4 className="item-title text-[#3e4152]">{item.name}</h4>
                    <p style={{ color: "#3E4152" }}>
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item.price / 100)
                        : " "}
                    </p>
                    {console.log(item)}
                    <p className="item-description text-sm py-4 text-[rgba(40,44,63,.45)]">
                      {item?.description}
                    </p>
                  </div>
                  <div className="menu-img-wrapper">
                    <div className="menu-img">
                      {item?.imageId && (
                        <img
                          src={IMG_CDN_LINK + item?.imageId}
                          alt={item?.name}
                          className="py-1"
                        />
                      )}
                      <button
                        onClick={() => addFoodItem(item)}
                        className="add-btn border px-2 rounded-xl text-[#60b246] hover:shadow-md"
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainRestaurant;
