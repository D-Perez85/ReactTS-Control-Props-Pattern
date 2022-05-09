import ProductCard from '../components/ProductCard';
import { ProductImg } from '../components/ProductImage';

import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Delicious Cafe",
  img: "./coffee-mug.png",
};
const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <ProductCard product={product} className="bg-dark text-white">
      <ProductImg
       className="custom-image"
       style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"}} />
      </ProductCard>        
      </div>
    </div>
  );
};
export default ShoppingPage;
