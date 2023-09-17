import { CartContext } from "../../contexts/cartContext";
import "./cartDropdown.scss";
import Button from "../button/button";
import CartItem from "../cardItem/cardItem";
import { useContext, useState } from "react";

const CartDropdown = () => {
  const { cartItems, showCheckOutPage, setShowCheckOutpage } =
    useContext(CartContext);

  const handleCheckOut = () => {
    setShowCheckOutpage(!showCheckOutPage);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <Button onClick={handleCheckOut}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
