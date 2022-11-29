import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { uiAction } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
let isinitialState = true;
function App() {
  const Dispatch = useDispatch();
  const iscartvisible = useSelector((state) => state.ui.iscartvisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendingData = async () => {
      Dispatch(
        uiAction.Addnotification({
          status: "pending",
          message: "sending cart data",
          title: "loading",
        })
      );
      try {
        const response = await fetch(
          "https://movies-671f6-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response) {
          throw new Error("sending faild");
        } else {
          Dispatch(
            uiAction.Addnotification({
              status: "compledted",
              message: "data sending sucessfull",
              title: "sucess",
            })
          );
        }
      } catch (error) {
        Dispatch(
          uiAction.Addnotification({
            status: "failed",
            message: "data sending faild",
            title: "erroe",
          })
        );
      }
    };
    if (isinitialState) {
      isinitialState = false;
      return;
    }
    sendingData();
  }, [cart, Dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {iscartvisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
