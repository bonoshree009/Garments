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
        const res = await axios.get(
          `https://garments-server-blush.vercel.app/allproducts/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return <div className="text-center mt-20">Loading...</div>;

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-64 object-cover rounded"
          />

          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
            <p className="mt-1"><b>Category:</b> {product.category}</p>
            <p className="mt-1"><b>Price:</b> ${product.price}</p>
            <p className="mt-1"><b>Quantity:</b> {product.quantity}</p>
            <p className="mt-1"><b>Minimum Order:</b> {product.minimumOrder}</p>
            <p className="mt-1"><b>Payment:</b> {product.paymentOptions}</p>

            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
