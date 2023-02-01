import { motion } from "framer-motion";

export default function WhiteScreenAnimation() {
  return (
    <div className="bg-whiteone w-screen h-screen absolute">
      <motion.div
        className="w-screen h-screen absolute z-30 bg-whiteone m-0"
        initial={{ width: "100%" }}
        animate={{ width: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="whitescreen w-screen h-screen absolute z-20 bg-blackone m-0"
        initial={{ width: "100%" }}
        animate={{ width: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      ></motion.div>
    </div>
  );
}
