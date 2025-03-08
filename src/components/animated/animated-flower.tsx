import * as motion from "motion/react-client";

export const AnimatedFlower = ({
  size = 26,
  color = "#d4af37",
  className = "",
  style = {},
  duration = 4,
}) => {
  return (
    <motion.span
      className={`animated-flower ${className}`}
      style={{
        display: "inline-block",
        color: color,
        fontSize: `${size}px`,
        ...style,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      ❀
    </motion.span>
  );
};

export default AnimatedFlower;
