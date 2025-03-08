import * as motion from "motion/react-client";

const Arch = () => {
  return (
    <svg viewBox="0 0 800 700" className="w-full max-w-3xl">
      {/* Glowing filter */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base arc with glow */}
      <motion.path
        d="M 100 400 C 200 50, 600 50, 700 400"
        stroke="#fff"
        strokeWidth="4"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.3, 1],
        }}
      />

      {/* Secondary shimmer effect */}
      <motion.path
        d="M 100 200 C 200 100, 600 100, 700 200"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="1.5"
          fill="#fff"
          initial={{
            x: 100 + Math.random() * 600,
            y: 100 + Math.random() * 150,
            opacity: 0,
          }}
          animate={{
            y: [null, -50],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: Math.random(),
          }}
        />
      ))}
    </svg>
  );
};

export default Arch;
