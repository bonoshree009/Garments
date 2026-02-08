const steps = [
  "Place Order",
  "Production Starts",
  "Quality Check",
  "Packaging",
  "Delivery",
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <span className="text-2xl font-bold text-indigo-600">
                {index + 1}
              </span>
              <p className="mt-2 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
