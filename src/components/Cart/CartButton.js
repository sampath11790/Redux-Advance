import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceAction } from "../../store/CartSlice";
import { uiAction } from "../../store/ui-slice";
const CartButton = (props) => {
  const Dispatch = useDispatch();
  const Totalquantity = useSelector((state) => state.cart.Totalquantity);
  console.log(Totalquantity);
  const cartbuttonHandler = () => {
    Dispatch(uiAction.Carttoggle());
  };
  return (
    <button className={classes.button} onClick={cartbuttonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{Totalquantity}</span>
    </button>
  );
};

export default CartButton;
