import Hero from "./Hero";
//import OurProducts from "./OurProducts";
import HowItWorks from "./HowItWorks";
import Feedback from "./Feedback";
import ExtraOne from "./ExtraOne"
import ExtraTwo from "./ExtraTwo"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
//import ExtraOne from "./ExtraOne";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      {/* <OurProducts /> */}
      <HowItWorks />
      <Feedback />
     <ExtraOne></ExtraOne>

      <ExtraTwo></ExtraTwo>
    </motion.div>
  );
};

export default Home;
