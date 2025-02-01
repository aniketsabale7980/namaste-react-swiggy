import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, allRestaurant) {
  if (!searchText) {
    return restaurantList;
  }

  console.log("restaurant list - ", restaurantList);
  const filteredData = allRestaurant.filter((restro) => {
    return restro?.card?.card?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredData;
}

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
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&collection=80362&tags=layout_PavBhaji_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log("json ->>", json?.data?.cards);
    //optional chaining
    setAllRestaurant(json?.data?.cards);
    setFilteredRestaurants(json?.data?.cards);
  }

  /**
   * conditional rendering
   * if restraurant is empty --> shimmer UI
   * if restaurant has data --> actual data UI
   */

  //early return --> not rendor component
  if (!allRestaurant) return null;

  console.log("rendor");
  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-continer">
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
            console.log("data ----<<", data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restro) => {
          return (
            <RestaurantCard
              {...restro.card.card.info}
              key={restro?.card?.card?.info?.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
