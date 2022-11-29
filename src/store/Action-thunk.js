import { uiAction } from "./ui-slice";
import { cartSliceAction } from "./CartSlice";

//helper function to fetch data
const sendData = async (cart) => {
  const response = await fetch(
    "https://movies-671f6-default-rtdb.firebaseio.com/cart.json",
    {
      method: "PUT",
      body: JSON.stringify(cart),
    }
  );
  if (!response) {
    throw new Error("sending faild");
  }
};

// thunk action function allows us to perform async function
export const sentCartdata = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.Addnotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    try {
      //data sending fetch function
      await sendData(cart);

      dispatch(
        uiAction.Addnotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.Addnotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const FetchData = () => {
  return async (Dispatch) => {
    const FetchingData = async () => {
      const response = await fetch(
        "https://movies-671f6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!response) {
        throw new Error("sending faild");
      }
      const data = await response.json();

      return data;
    };
    try {
      const data = await FetchingData();
      Dispatch(
        cartSliceAction.replaceCart({
          items: data.items || [],
          Totalquantity: data.Totalquantity,
        })
      );
    } catch (errot) {
      Dispatch(
        uiAction.Addnotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
