import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { type Product } from "../types";
import "../styles/ProductList.css";
export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  if (loading) return <Loader />;
  if (error) return <div className="container">{error}</div>;

  return (
    <div className="container-product-list">
      <div className="search">
    <div className="search-container">
        <div className="search-tool">     <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="gray"
    viewBox="0 0 24 24"
    
  >
    <path
      d="M10 2a8 8 0 105.29 14.29l4.7 4.7a1 1 0 001.42-1.42l-4.7-4.7A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
    />
  </svg></div>
    
    <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

    </div>
  
      </div>
  <div className="title-container">
        <div className="title">
            BROWSE
        </div>
    </div>
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
