import { useState } from "react";
import { cn } from "@/lib/utils";

const Carousel = () => {
    const [items, setItems]=useState<any>([
        "https://i.pinimg.com/236x/74/c0/2d/74c02d0a629b006c2f47b9d0e3b7334c.jpg",
        "https://i.pinimg.com/736x/74/42/ae/7442aed15e9dd49f31bc6d3d426177ce.jpg",
        "https://i.pinimg.com/236x/2c/dc/57/2cdc57492569ca648b6dfe1a7403dfa3.jpg",
    ])
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item:any, index:any) => (
            <div
              key={index}
              className={cn(
                "w-full flex-shrink-0 h-64 bg-center bg-cover",
                currentIndex === index && "opacity-100",
                currentIndex !== index && "opacity-0"
              )}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        onClick={handlePrev}
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        onClick={handleNext}
      >
        &#10095; {/* Right Arrow */}
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {items.map((_:any, index:any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 mx-1 rounded-full",
              index === currentIndex
                ? "bg-gray-800"
                : "bg-gray-300 hover:bg-gray-400"
            )}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
