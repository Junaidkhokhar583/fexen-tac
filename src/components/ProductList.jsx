function ProductList({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />
      <h2 className="mt-3 text-sm font-semibold line-clamp-2">
        {product.title}
      </h2>
      <p className="mt-2 font-bold text-lg">
        ID: {product.id}
      </p>
      <p className="text-gray-500 text-xs mt-1">
        {product.category}
      </p>
      <p className="mt-2 font-bold text-lg">
        ${product.price}
      </p>
    </div>
  );
}

export default ProductList;