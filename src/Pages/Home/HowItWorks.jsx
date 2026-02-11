import "../../App.css";

const steps = [
  "Place Order",
  "Production Starts",
  "Quality Check",
  "Packaging",
  "Delivery",
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
          How It Works
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">
          {steps.map((step, index) => (
            <div key={index} className=" p-6 rounded-xl shadow bg-amber-300 card">
              <h2> <span className="text-xl font-bold text-orange-600">
                {index + 1}
              </span> </h2>
              <h2 className="mt-2 font-bold text-2xl text-white">{step}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
