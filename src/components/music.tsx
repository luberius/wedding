import { Play, Pause } from "lucide-react";
import { useEffect, useState } from "react";
import { globalAudio } from "../GlobalAudio";

// Vinyl Disc Component
const VinylDisc = ({ isPlaying, children }: any) => {
  return (
    <div
      className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-black border-4 border-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 ${isPlaying ? "animate-spin" : ""}`}
      style={{ animationDuration: "4s" }}
    >
      <div className="absolute w-14 h-14 rounded-full border border-gray-700 opacity-30"></div>
      <div className="absolute w-12 h-12 rounded-full border border-gray-700 opacity-30"></div>
      <div className="absolute w-10 h-10 rounded-full border border-gray-700 opacity-30"></div>
      <div className="absolute w-8 h-8 rounded-full border border-gray-700 opacity-30"></div>

      {!children && (
        <div className="w-6 h-6 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-black"></div>
        </div>
      )}

      {children}

      <div className="absolute w-2 h-2 rounded-full bg-white top-2 right-2 opacity-30"></div>
      <div className="absolute w-1 h-3 rounded-full bg-white bottom-4 left-3 opacity-20 transform rotate-45"></div>
    </div>
  );
};

// Play/Pause Button Component
const PlayPauseButton = ({ isPlaying, onClick }: any) => {
  return (
    <button
      className={`w-6 h-6 rounded-full bg-opacity-90 text-white flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-110 active:scale-95 z-10 p-0`}
      onClick={onClick}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      style={{ padding: 6 }}
    >
      {isPlaying ? (
        <Pause className="w-16 h-16" />
      ) : (
        <Play className="w-16 h-16" />
      )}
    </button>
  );
};

const MusicPlayer = ({
  position = { bottom: 3, right: 1 }, // in rem units
}) => {
  const [isPlaying, setIsPlaying] = useState(globalAudio.isPlaying);

  useEffect(() => {
    const unsubscribe = globalAudio.subscribe(({ isPlaying }) => {
      setIsPlaying(isPlaying);
    });

    return unsubscribe;
  }, []);

  const toggle = () => {
    globalAudio.toggle();
  };

  const positionStyle = {
    bottom: `${position.bottom}rem`,
    right: `${position.right}rem`,
  };

  return (
    <>
      {/* Vinyl disc with play/pause button in center */}
      <div className="fixed" style={positionStyle}>
        <div className={`relative ${isPlaying ? "play-state" : ""}`}>
          <VinylDisc isPlaying={isPlaying}>
            {/* This div prevents the button from spinning with the vinyl */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: isPlaying ? "rotate(0deg)" : "none" }}
            >
              <PlayPauseButton
                isPlaying={isPlaying}
                onClick={toggle}
                size="small"
              />
            </div>
          </VinylDisc>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
