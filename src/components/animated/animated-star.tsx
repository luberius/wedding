import * as motion from "motion/react-client";

export const AnimatedStar = ({
  size = 24,
  color = "#d4af37",
  className = "",
  style = {},
  delay = 0,
}) => {
  return (
    <motion.span
      className={`animated-star ${className}`}
      style={{
        display: "inline-block",
        color: color,
        fontSize: `${size}px`,
        ...style,
      }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.1, 0.8],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      ✧
    </motion.span>
  );
};

export default AnimatedStar;
