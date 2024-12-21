import { getProducts } from "@/lib/getProducts";

const Products = async () => {
    const productsData = getProducts();
    const products = await productsData;
  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
            
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;