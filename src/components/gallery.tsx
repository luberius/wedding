import { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageFiles = [
      "rotated_DSCF6880_resized.webp",
      "rotated_DSCF6883_resized.webp",
      "rotated_DSCF6886_resized.webp",
      "rotated_DSCF6887_resized.webp",
      "rotated_DSCF6889_resized.webp",
      "rotated_DSCF6891_resized.webp",
      "rotated_DSCF6892_resized.webp",
      "rotated_DSCF6893_resized.webp",
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
    return `${(index % 5) * 0.1}s`;
  };

  // Render loading state with animated skeleton loader
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div className="h-10 w-40 bg-gray-200 rounded animate-pulse mb-4 sm:mb-0"></div>
            <div className="h-10 w-full sm:w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Animated grid skeleton */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left column */}
          <div className="flex flex-col space-y-4">
            {[1, 3, 5, 7, 9].map((i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden relative transform transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="h-64 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"
                  style={{ backgroundSize: "200% 100%" }}
                ></div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-4">
            {[2, 4, 6, 8, 10].map((i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden relative transform transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="h-64 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"
                  style={{ backgroundSize: "200% 100%" }}
                ></div>
              </div>
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header with search and navigation */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl mb-4 sm:mb-0">Gallery</h1>
        </div>
      </div>

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
    <div
      className={`relative group rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      onClick={() => onClick(image)}
      style={{ transitionDelay: animationDelay }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Shimmer loading effect */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      {/* Overlay that appears on hover with enhanced animations */}
      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 transform transition-all duration-700 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
              <button className="p-2 bg-white bg-opacity-90 rounded-md hover:bg-opacity-100 transition-colors hover:scale-110 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-red-500 transition-colors"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button className="p-2 bg-white bg-opacity-90 rounded-md hover:bg-opacity-100 transition-colors hover:scale-110 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-blue-500 transition-colors"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
