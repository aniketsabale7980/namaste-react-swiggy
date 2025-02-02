import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMN_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { restroId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    console.log("useEffect called!");

    async function getRestaurantInfo() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=" +
          restroId +
          "&catalog_qa=undefined&query=Burger&submitAction=ENTER"
      );
      const json = await data.json();
      setRestaurant(json.data);
      console.log("json --->>", json);
    }

    getRestaurantInfo();
  }, [restroId]);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant fetch : {restaurant?.statusMessage}</h1>
      <h2>
        Restaurant Name :
        {restaurant?.cards.map((data, index) => {
          return (
            <div>
              <p>{data?.card?.card?.info?.name}</p>
              <img
                key={index}
                alt="menu"
                src={IMN_CDN_URL + data?.card?.card?.info?.cloudinaryImageId}
              />
            </div>
          );
        })}
      </h2>
    </div>
  );
};

export default RestaurantMenu;
