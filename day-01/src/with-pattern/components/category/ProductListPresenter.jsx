import React, { useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import Cart from "./Cart";
import CategorySidebar from "../product/CategorySidebar";
import CategoryProducts from "../product/CategoryProducts";
function ProductListPresenter({
  categories,
  products,
  loading,
  error,
  onRetry,
  onFetchProducts,
}) {
  const [cartCount, setCartCount] = useState(3);


  const handleCart = () => {
    setCartCount((prev) => prev + 1);
  };

  if (loading) {
    return <LoadingSpinner message="Loading product categories..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Oops! Something went wrong"
        message={error}
        onRetry={onRetry}
      />
    );
  }

  return (
    <div className="category-layout">
      <Cart cartCount={cartCount} />
      <CategorySidebar
        categories={categories}
        onFetchProducts={onFetchProducts}
      />
      <CategoryProducts products={products} onCart={handleCart} />
    </div>
  );
}

export default ProductListPresenter;
