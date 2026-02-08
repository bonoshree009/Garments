import { useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import SectionTitle from "../../components/common/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const OurProducts = () => {
  const axiosSecure = useAxiosSecure();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosSecure.get("/products?home=true&limit=6").then((res) => {
      setProducts(res.data);
    });
  }, [axiosSecure]);

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <SectionTitle
        heading="Our Products"
        subHeading="Top quality garments from trusted factories"
      />

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
