import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const iscartvisible = useSelector((state) => state.ui.iscartvisible);
  return (
    <Layout>
      {iscartvisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
