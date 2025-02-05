import { IMN_CDN_URL } from "../Constants";

const RestaurantCard = ({ name, cloudinaryImageId, avgRating, costForTwo }) => {
  return (
    <div className="card">
      <img alt="card" src={IMN_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{avgRating}</h3>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
