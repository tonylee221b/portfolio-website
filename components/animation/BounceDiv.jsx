import { motion } from "framer-motion";

export const BounceDiv = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1.1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
};
