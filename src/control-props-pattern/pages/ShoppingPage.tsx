import { ProductButtons, ProductImg, ProductTitle, ProductCard } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange, products } = useShoppingCart();
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
              product={product}
              key={product.id}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}>
                <ProductImg className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
                <ProductTitle title={product.title} className="text-white text-bold"/>
                <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
      {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              key={key}
              value={product.count}
              onChange={onProductCountChange}>
                <ProductImg className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
                <ProductButtons className="custom-buttons" style={{ display: "flex", justifyContent: "center" }}/>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
export default ShoppingPage;
