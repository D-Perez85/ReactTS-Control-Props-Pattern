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
  const onProductCountChange = ({ count, product }: { count: number; product: Product}) => {
  console.log('onProductCountChange', count, product);    
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
        <ProductCard
          product={products[1]}
          className="bg-dark text-white"
          style={{ width: "100px" }}>
          <ProductImg
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
          <ProductButtons
            className="custom-buttons"
            style={{ display: "flex", justifyContent: "center" }}/>
        </ProductCard>
      </div>
    </div>
  );
};
export default ShoppingPage;
