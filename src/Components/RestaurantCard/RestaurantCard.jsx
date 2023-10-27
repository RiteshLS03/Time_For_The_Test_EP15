import React from "react";
import "./RestaurantCard.css";
import { IMG_CDN_LINK } from "../config";
import {AiFillStar} from "react-icons/ai"

function RestaurantCard({ restaurant }) {
  const { name , costForTwo, cuisines , cloudinaryImageId  , avgRatingString} = restaurant?.info
  return (
    <div className="card-data shadow-lg" id={restaurant?.info?.id} >
      <img
        src={
          IMG_CDN_LINK +
          cloudinaryImageId
        }
      />
      {/*image*/}
      <div className="cardinfo ">
        <h4 className="cardinfo_name text-sm">{name}</h4> {/*restaurantName*/}
        <div className="restaurant_price-rating my-2">
        <h3 className="text-md">{costForTwo}</h3> {/*price */}
        <h3 className="cardinfo_ratings "><AiFillStar className="gap-2" style={{color:"green"}}/>{avgRatingString}</h3>{/*  */}
        </div>
        <h3 className="cardinfo_cuisines text-xs">{cuisines.join(", ")}</h3> {/* cuisines */}
      </div>
    </div>
  );
}

export default RestaurantCard;

