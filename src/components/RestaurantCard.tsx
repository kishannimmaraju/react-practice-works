const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/klwyzl8jyozrkxe9tjl7"
        alt=""
      />
      <h2>{resData.restaurantName}</h2>
      <h3>{resData.type}</h3>
      <h4>{resData.address}</h4>
      <h4>{resData.avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
