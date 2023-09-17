import CheckOutItem from "../checkOutItem/checkOutItem";
import "./checkOut.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  console.log("totalprice", totalPrice);
  console.log("checkout", cartItems);
  return (
    <div className="checkout-container">
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <div>{totalPrice}</div>
    </div>
  );
};

export default CheckOut;
