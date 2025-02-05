import { useState, useEffect } from "react";

const useRestaurantMenu = (restroId) => {
  const [restaurant, setRestaurant] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=" +
        restroId +
        "&catalog_qa=undefined&query=Burger&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, [restroId]);

  return restaurant;
};

export default useRestaurantMenu;
