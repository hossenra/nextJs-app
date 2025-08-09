import ProductsCard from "@/components/Products/ProductsCard";
import Link from "next/link";

const Login = async () => {
  try {
    const res = await fetch("http://localhost:3004/products", {
      next: {
        revalidate: 30,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await res.json();

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center my-4">Our Products</h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products available</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 3).map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/allProducts"
                className="inline-block bg-black text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                See More
              </Link>
            </div>
          </>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center my-4">Our Products</h1>
        <p className="text-center text-red-500">
          Failed to load products. Please try again later.
        </p>
      </div>
    );
  }
};

export default Login;
