import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect executed.");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    //optional chaining
    setAllRestaurant(json?.data?.cards);
    setFilteredRestaurants(json?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offiline, please check your internet connection.!</h1>;
  }
  /**
   * conditional rendering
   * if restraurant is empty --> shimmer UI
   * if restaurant has data --> actual data UI
   */

  //early return --> not rendor component
  if (!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restro) => {
          return (
            <Link
              to={"/restaurant/" + restro?.card?.card?.info?.id}
              key={restro?.card?.card?.info?.id}
            >
              <RestaurantCard {...restro.card.card.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
