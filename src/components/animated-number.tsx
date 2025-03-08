import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

interface IProps {
  number: string;
}

const AnimatedNumber = ({ number }: IProps) => (
  <div className="relative h-3 w-3 inline-block">
    <AnimatePresence mode="popLayout">
      <motion.div
        key={number}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center text-xl font-bold"
      >
        {number}
      </motion.div>
    </AnimatePresence>
  </div>
);

export default AnimatedNumber;
