import "./cartDropdown.scss";
import Button from "../button/button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go To Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
