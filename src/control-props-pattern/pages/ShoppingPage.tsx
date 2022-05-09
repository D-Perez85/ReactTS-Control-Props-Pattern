import ProductCard from '../components/ProductCard';

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
      </ProductCard>        
      </div>
    </div>
  );
};
export default ShoppingPage;
