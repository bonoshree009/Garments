// src/Pages/AllProducts.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";


const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth(); // ✅ GET USER

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://garments-server-blush.vercel.app/allproducts"
        );
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/login", {
        state: { from: `/all-products/${id}` },
      });
    } else {
      navigate(`/all-products/${id}`);
    }
  };

  if (loading) return <div className="text-center mt-20">Loading Products...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      {products.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded"
              />

              <h2 className="text-xl font-semibold mt-4">
                {product.name}
              </h2>

              <p className="text-gray-600 mt-1">
                Category: {product.category}
              </p>

              <p className="text-gray-600 mt-1">
                Price: ${product.price}
              </p>

              <p className="text-gray-600 mt-1">
                Available Quantity: {product.quantity}
              </p>

              <button
                onClick={() => handleViewDetails(product._id)}
                className="mt-4 py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
