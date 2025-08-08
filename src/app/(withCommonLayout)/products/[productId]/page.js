import React from "react";

const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  console.log(await searchParams);

  return (
    <div>
      <h1 className="text-4xl text-center">
        Dynamic Product Page : {productId}
      </h1>
    </div>
  );
};

export default DynamicProductPage;
