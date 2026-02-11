import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeedBack = () => {
  const reviews = [
    {
      name: "Ayesha Rahman",
      comment: "Amazing platform! I found fresh food nearby and reduced waste.",
    },
    {
      name: "Tanvir Hasan",
      comment: "Very helpful for students. Easy to use and community-friendly.",
    },
    {
      name: "Nusrat Jahan",
      comment: "Loved the idea. Sharing food has never been this simple!",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-200 to-yellow-400">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-14"
      >
        What People Say 💬
      </motion.h2>

      <div className="max-w-3xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          className="pb-12"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-3xl shadow-2xl text-center"
              >
                <p className="text-gray-600 text-lg mb-6">
                  “{item.comment}”
                </p>
                <h4 className="text-xl font-semibold text-green-600">
                  — {item.name}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeedBack;
