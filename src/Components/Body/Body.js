import { useEffect,useState } from "react";
import { RestaurantCard , ShimmarUI} from "../Index";
import { SwiggyAPI_URL } from "../config.js";
import "./Body.css"
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import {AiOutlineSearch} from "react-icons/ai"
import { useContext } from "react";
import UserContext from "../../utils/UserContext";


function Body () {
  
  const [allRestaurants , setAllRestaurants] = useState(0);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //useState is a function that return an array. First Element is state varible and second element is function that how we want to change the state

  useEffect(()=>{
    getResturants()
  },[])


  async function  getResturants(){

    try {
      const response = await fetch(SwiggyAPI_URL);
      const json = await response.json();
console.log(json);
      async function checkJsonData(jsondata){
        for(i=0;i < jsondata?.data?.cards.length; i++){

          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          if(checkData !== undefined){
            return checkData;

          }
        }
      }
      const resData = await checkJsonData(json);
      console.log(resData);
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);

    } catch (error) {
      console.log(error)
    }
  } 

  const online = useOnline();

  if(!online){
    <h1>🔴Sorry , please check your internet connection</h1>
  }

  const {user,setUser} = useContext(UserContext)

  return (
  (<>
      <div className=" md:mx-4">
        <div className="search-nav p-5 m-2">
          <input
            type="text"
            id="searchbar"
            placeholder="Search, Order, Enjoy!"
            className="border-2 w-[300px] p-2 rounded-xl absolute "
            value={searchText}
            onChange={(e) => {
             setSearchText(e.target.value);
            }}
          />
          <button  className="border-1 relative left-32 "
            onClick={() => {
              // need to filter the data
              const data = filterData(searchText, allRestaurants);
              // and set it to the hook
              setFilteredRestaurants(data);
            }}
          >
            <AiOutlineSearch />
          </button>
        </div>

        {/* CARDS */}
      <div className="cards mx-auto sm:mx-auto sm:justify-around md:mx-auto">
       {  
  !allRestaurants ?
      <ShimmarUI /> :
      filteredRestaurants?.map((restaurant) => 
         {
           return ( 
            <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}>
              <div className="body-rest" >
              <RestaurantCard  restaurant={...restaurant}  />
              </div>
            </Link>
           )
          })
       }
      </div>
    </div> 
        </>
    ))
  }

  export default Body;