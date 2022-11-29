import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { uiAction } from "./store/ui-slice";
import { sentCartdata } from "./store/Action-thunk";
import Notification from "./components/UI/Notification";
import { FetchData } from "./store/Action-thunk";
let isinitialState = true;
function App() {
  const Dispatch = useDispatch();
  const iscartvisible = useSelector((state) => state.ui.iscartvisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    Dispatch(FetchData());
  }, []);
  useEffect(() => {
    if (isinitialState) {
      isinitialState = false;
      return;
    }
    Dispatch(sentCartdata(cart));
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
