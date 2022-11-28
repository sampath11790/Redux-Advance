import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartSliceAction } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const Dispatch = useDispatch();

  const { title, price, description, id } = props;
  const addcartitemHandler = () => {
    Dispatch(
      cartSliceAction.addItem({
        title: props.title,
        price: props.price,
        id: props.id,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addcartitemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
