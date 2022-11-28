import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const dummyitem = [
  { id: 1, title: "Test Item", quantity: 3, total: 18, price: 6 },
  { id: 2, title: "Test Item", quantity: 3, total: 18, price: 6 },
];
const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            quantity={item.quantity}
            title={item.name}
            total={item.totalprice}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
