import { useEffect, useState } from "react";
import AnimatedNumber from "./animated-number";

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-04-10T10:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();

      //@ts-ignore
      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0").split("");
  };

  return (
    <div className="flex items-center space-x-4 mb-8">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(timeLeft.days).map((digit, idx) => (
            <AnimatedNumber key={`days-${idx}`} number={digit} />
          ))}
        </div>
        <div className="text-sm mt-2">D</div>
      </div>

      <span className="text-xl font-bold pb-8">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(timeLeft.hours).map((digit, idx) => (
            <AnimatedNumber key={`hours-${idx}`} number={digit} />
          ))}
        </div>
        <div className="text-sm mt-2">H</div>
      </div>

      <span className="text-xl font-bold pb-8">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(timeLeft.minutes).map((digit, idx) => (
            <AnimatedNumber key={`minutes-${idx}`} number={digit} />
          ))}
        </div>
        <div className="text-sm mt-2">M</div>
      </div>

      <span className="text-xl font-bold pb-8">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(timeLeft.seconds).map((digit, idx) => (
            <AnimatedNumber key={`seconds-${idx}`} number={digit} />
          ))}
        </div>
        <div className="text-sm mt-2">S</div>
      </div>
    </div>
  );
};

export default Counter;
