import  { useEffect, useState } from "react";
import classof1967 from "../assets/img/Events/Class of 1967 event.jpg";
import homecoming2022 from "../assets/img/Events/HomeComing2022.png";

import rajSoin from "../assets/img/Events/Raj Soin Event.jpg";

// Example PromoCard data for DTU Alumni Meet 2025
const promos = [
  {
    title: "Class of 1967 Reunion ",
    description: "Reconnect with your batchmates and relive the golden days at DTU.",
    image: classof1967,
  },
  {
    title: "Homecoming 2022 Highlights",
    description: "A glimpse into the memorable moments from our last grand event.",
    image: homecoming2022,
  },
  {
    title: "Raj Soin Hall Inauguration",
    description: "Celebrating the legacy of a distinguished alumnus and benefactor.",
    image: rajSoin,
  },
];

export default function SliderBox() {
  const [current, setCurrent] = useState(0);
  const length = promos.length;

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="mt-20 w-full relative overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {promos.map((promo, index) => (
          <div
            key={index}
            className="min-w-full h-56 md:h-72 relative flex-shrink-0"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 md:p-12">
              <h2 className="text-white text-lg md:text-xl font-semibold mb-2">
                {promo.title}
              </h2>
              <p className="text-white text-xs md:text-sm">{promo.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {promos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
