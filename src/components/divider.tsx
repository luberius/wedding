import { motion } from "motion/react";

type SymbolType = "star" | "flower" | "ornament" | "heart" | string;

// Define the props interface
interface OrnamentalDividerProps {
  symbol?: SymbolType;
  color?: string; // Tailwind text color class
  lineColor?: string; // Tailwind gradient color classes
  animate?: boolean;
  className?: string;
}

// Symbol mapping with TypeScript
const symbolMap: Record<string, string> = {
  star: "✧",
  flower: "❀",
  ornament: "✦",
  heart: "♥",
};

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  symbol = "star",
  color = "text-[var(--main-color)]",
  lineColor = "from-transparent via-[var(--main-color)] to-transparent",
  animate = true,
  className = "",
}) => {
  const displaySymbol = symbolMap[symbol] || symbol;

  return (
    <motion.div
      className={`flex items-center my-6 w-full ${className}`}
      initial={{ width: "40%", opacity: 0, margin: "1.5rem auto" }}
      animate={{ width: "100%", opacity: 1, margin: "1.5rem 0" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`flex-grow h-0.5 bg-gradient-to-r ${lineColor}`}></div>

      <motion.span
        className={`mx-4 text-2xl inline-block ${color}`}
        animate={animate ? { rotate: 360 } : {}}
        transition={
          animate
            ? {
                duration: 4,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }
            : {}
        }
      >
        {displaySymbol}
      </motion.span>

      <div className={`flex-grow h-0.5 bg-gradient-to-r ${lineColor}`}></div>
    </motion.div>
  );
};

export default OrnamentalDivider;
