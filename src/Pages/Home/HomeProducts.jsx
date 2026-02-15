// HomeProducts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/allproducts");
        setProducts(res.data.slice(0, 6)); // প্রথম 6 products
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-1">Category: {product.category}</p>
            <p className="text-gray-600 mt-1">Price: ${product.price}</p>
            <button
              onClick={() => navigate(`/all-products/${product._id}`)}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
