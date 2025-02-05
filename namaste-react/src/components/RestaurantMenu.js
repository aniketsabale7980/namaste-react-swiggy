import { useParams } from "react-router-dom";
import { IMN_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restroId } = useParams();

  const restaurant = useRestaurantMenu(restroId);

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
