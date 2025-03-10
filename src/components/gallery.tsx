import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Gallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageFiles = [
      "DSCF6808.webp",
      "DSCF6821.webp",
      "DSCF6839.webp",
      "DSCF6848.webp",
      "DSCF6889.webp",
      "DSCF6971.webp",
      "DSCF6860.webp",
      "MEITU_20250310_131118440.webp",
    ];

    // Load images with metadata
    const loadedImages = imageFiles.map((filename, index) => ({
      id: index + 1,
      src: `/gallery/${filename}`,
      alt: `Photo ${filename.replace("_resized.webp", "")}`,
      title: `Photo ${filename.replace("_resized.webp", "")}`,
      photographer: "Photographer",
      likes: Math.floor(Math.random() * 1000),
      downloads: Math.floor(Math.random() * 500),
      tags: ["photography", "collection"],
    }));

    // Simulate loading delay for animation demonstration
    setTimeout(() => {
      setImages(loadedImages);
      setLoading(false);
    }, 800);
  }, []);

  // Function to handle image click
  const handleImageClick = (image: any) => {
    // In a real app, this would open a full-screen preview
    console.log(`Viewing image: ${image.id}`);
  };

  // Animation for staggered image loading
  const getAnimationDelay = (index: any) => {
    return (index % 5) * 0.1;
  };

  // Render loading state with animated skeleton loader
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div className="h-10 w-40 bg-gray-200 rounded animate-pulse mb-4 sm:mb-0"></div>
            <div className="h-10 w-full sm:w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              ></motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated grid skeleton */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left column */}
          <div className="flex flex-col space-y-4">
            {[1, 3, 5, 7, 9].map((i) => (
              <motion.div
                key={i}
                className="rounded-lg overflow-hidden relative transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="h-64 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"
                  style={{ backgroundSize: "200% 100%" }}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-4">
            {[2, 4, 6, 8, 10].map((i) => (
              <motion.div
                key={i}
                className="rounded-lg overflow-hidden relative transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="h-64 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"
                  style={{ backgroundSize: "200% 100%" }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Split images into two columns for the masonry layout
  const leftColumnImages = images.filter((_, i) => i % 2 === 0);
  const rightColumnImages = images.filter((_, i) => i % 2 === 1);

  return (
    <div id="gallery" className="max-w-md mx-auto px-4 py-8">
      {/* Header with search and navigation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <motion.h1
            className="text-3xl mb-4 sm:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Gallery
          </motion.h1>
        </div>
      </motion.div>

      {/* Forced 2-column grid layout (no responsive single column) */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-col space-y-4">
          {leftColumnImages.map((image, index) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={handleImageClick}
              animationDelay={getAnimationDelay(index)}
            />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col space-y-4">
          {rightColumnImages.map((image, index) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={handleImageClick}
              animationDelay={getAnimationDelay(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, onClick, animationDelay }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden cursor-pointer"
      onClick={() => onClick(image)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.22, 1, 0.36, 1], // Custom easing for more elegant motion
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto object-cover"
        onLoad={() => setIsLoaded(true)}
        whileHover={{
          scale: 1.05,
          rotate: 1,
          transition: { duration: 0.5 },
        }}
      />

      {/* Shimmer loading effect */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
      )}
    </motion.div>
  );
};

export default Gallery;
