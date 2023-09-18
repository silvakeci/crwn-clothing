import "./checkOutItem.scss";
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import {MdOutlineCancel} from 'react-icons/md'
import { useContext} from "react";
import {CartContext} from "../../contexts/cartContext";

const CheckOutItem = ({ item }) => {

  const { name, imageUrl, quantity, price, } = item;
  const { handleIncreaseQuantity  }= useContext(CartContext)

    const IncreaseQuantity = ()=>{
      handleIncreaseQuantity(item)
    }

  return (
    <div className="item-container">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div>
          <IoIosArrowBack onClick={IncreaseQuantity}  />
          {quantity}
          <IoIosArrowForward onClick={IncreaseQuantity}/>
      </div>
      <div>{price}</div>
      <MdOutlineCancel/>
    </div>
  );
};

export default CheckOutItem;
