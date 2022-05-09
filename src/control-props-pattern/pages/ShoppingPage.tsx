import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductImg } from "../components/ProductImage";
import { ProductButtons } from "../components/ProductButtons";
import { ProductTitle } from "../components/ProductTitle";
import { products } from "../data/products";
import { Product, ProductInCart } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

  const onProductCountChange = ({ count, product}: {count: number; product: Product}) => {
    setShoppingCart((oldShoppingCart) => {
          if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
          }
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          };
        });
      };
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}>
            <ProductImg
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
            <ProductTitle />
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
              <ProductButtons 
              className="custom-buttons" 
              style={{ display: "flex", justifyContent: "center" }}
              />
          </ProductCard>
        ))}
      </div>
      {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};
export default ShoppingPage;
