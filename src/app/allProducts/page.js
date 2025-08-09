import ProductsCard from "@/components/Products/ProductsCard";
import Link from "next/link";

const AllProducts = async () => {
  const res = await fetch("http://localhost:3004/products", {
    cache: "no-store",
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <h1 className="text-center text-4xl">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
