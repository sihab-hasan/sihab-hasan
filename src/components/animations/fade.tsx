import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Fade = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.45, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
};

export default Fade;
