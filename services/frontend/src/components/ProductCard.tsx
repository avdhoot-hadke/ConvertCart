function ProductCard({ product }: { product: any }) {
  return (
    <div className="border p-4 rounded-lg shadow bg-white">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold ">{product.title}</h3>
        {product.on_sale ? (
          <p className="text-gray-500 text-sm">On Sale</p>
        ) : (
          <></>
        )}
      </div>
      <p>
        <span className="text-gray-500">Category:</span> {product.category}
      </p>
      <p>
        <span className="text-gray-500">Stock Status:</span>{" "}
        {product.stock_status}
      </p>
      {product.stock_quantity != null ? (
        <p className="text-gray-500">
          <span className="text-gray-500">Stock Remaining:</span>{" "}
          {product.stock_quantity}
        </p>
      ) : (
        <>
          <span className="text-gray-500">Stock Remaining:</span> N.A.
        </>
      )}

      {/* <p>Tags: {product.tags}</p> */}
      <p>
        <span className="text-gray-500">Price:</span> ${product.price}
      </p>
    </div>
  );
}

export default ProductCard;
