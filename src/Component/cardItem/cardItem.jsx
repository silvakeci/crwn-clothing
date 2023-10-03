import { CartItemContainer, ItemDetails } from './cardItemStyle';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>
          {quantity} x ${price}
        </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;