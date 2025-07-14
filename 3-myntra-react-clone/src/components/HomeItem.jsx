const HomeItem = ({ item }) => {
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating?.stars ?? "N/A"} ⭐ | {item.rating?.count ?? 0}
      </div>

      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">₹{item.current_price}</span>
        <span className="original-price">₹{item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button
        className="btn-add-bag"
        onClick={() => console.log("item was clicked")}
      >
        Add to Bag
      </button>
    </div>
  );
};

export default HomeItem;
