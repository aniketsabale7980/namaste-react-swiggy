import { IMN_CDN_URL } from "../Constants";

const RestaurantCard = ({ name, cloudinaryImageId, avgRating, costForTwo }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
      <img alt="card" src={IMN_CDN_URL + cloudinaryImageId} />
      <h2 className="text-xl font-bold">{name}</h2>
      <h3 cla>{avgRating}</h3>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
