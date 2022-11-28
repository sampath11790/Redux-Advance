import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const dummyData = [
  {
    id: "a1",
    title: "test",
    price: 5,
    description: "This is a first product - amazing!",
  },
  {
    id: "a2",
    title: "test",
    price: 9,
    description: "This is a second product - amazing!",
  },
  {
    id: "a3",
    title: "test",
    price: 10,
    description: "This is a third product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((item) => (
          <ProductItem
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
