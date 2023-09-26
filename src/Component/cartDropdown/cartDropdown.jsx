import { CartContext } from "../../contexts/cartContext";
import "./cartDropdown.scss";
import Button from "../button/button";
import CartItem from "../cardItem/cardItem";
import { useContext } from "react";
import {useNavigate} from "react-router-dom";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler=()=>{
        navigate('/checkout')
    }



    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
        </div>
    );
};

export default CartDropdown;
