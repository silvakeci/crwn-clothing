import "./checkOutItem.scss";

const CheckOutItem = ({ item }) => {
  console.log("Item", item);
  const { name, id, imageUrl, quantity, price } = item;

  return (
    <div className="item-container">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div>{quantity}</div>
      <div>{price}</div>
      <button />
    </div>
  );
};

export default CheckOutItem;
