import classes from "./CartItem.module.css";
import { cartSliceAction } from "../../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
  const Dispatch = useDispatch();
  const { title, quantity, total, price, id } = props;
  const minusHandler = () => {
    Dispatch(cartSliceAction.RemoveItem(id));
  };
  const plusHandler = () => {
    Dispatch(
      cartSliceAction.RemoveItem({
        title,
        quantity,
        total,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
