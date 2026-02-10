import { motion } from "framer-motion";

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
    <section className="py-16 bg-yellow-300">
      <h2 className="text-4xl font-bold text-center mb-10">
        What People Say 💬
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <p className="text-gray-600 mb-4">“{item.comment}”</p>
            <h4 className="font-semibold text-green-600">
              — {item.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeedBack;
