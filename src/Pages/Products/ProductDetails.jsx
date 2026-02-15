import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/allproducts/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading Product...</div>;
  if (!product) return <div className="text-center mt-20">Product not found</div>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-64 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="mt-2"><strong>Category:</strong> {product.category}</p>
            <p className="mt-1"><strong>Price:</strong> ${product.price}</p>
            <p className="mt-1"><strong>Available Quantity:</strong> {product.quantity}</p>
            <p className="mt-1"><strong>Minimum Order:</strong> {product.minimumOrder}</p>
            <p className="mt-1"><strong>Payment Options:</strong> {product.paymentOptions}</p>

            {/* Order / Booking Button - logic example */}
            {product.role !== "admin" && product.role !== "manager" && (
              <button className="mt-4 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Place Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
