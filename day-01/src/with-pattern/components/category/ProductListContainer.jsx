import { useEffect, useState,} from "react";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";

const ProductListContainer = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/categories`
      );

      setCategories(response.data);
    } catch (error) {
      console.error("Error while fetching categories", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchProducts = async (name) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/products`
      );

      const filteredResponse = response.data.filter(
        (data) => data.category === name
      );

      setProducts(filteredResponse);
    } catch (error) {
      console.error("Error: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchCategories();
  };

  return (
    <ProductListPresenter
      categories={categories}
      products={products}
      loading={loading}
      error={error}
      onRetry={handleRetry}
      onFetchProducts={handleFetchProducts}
    />
  );
};

export default ProductListContainer;
