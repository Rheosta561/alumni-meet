import  { useEffect, useState } from "react";

// Example PromoCard data for DTU Alumni Meet 2025
const promos = [
  {
    title: "Welcome Alumni",
    description: "Reconnect with your batchmates and relive the memories of DTU.",
    image: "https://media.gettyimages.com/id/2233063994/photo/northwestern-university-president-michael-schill-attends-a-faculty-senate-meeting-on-april-9.jpg?s=612x612&w=0&k=20&c=DZsIJyLuT6keKisW9U7mNbtRfNclSCbP0YztEz5TNLQ=",
  },
  {
    title: "Networking & Fun",
    description: "Engage in workshops, competitions, and networking sessions with alumni across the globe.",
    image: "https://media.gettyimages.com/id/2226386029/photo/parents-greeting-their-daughter%C3%A2s-boyfriend-with-a-handshake-on-their-graduation-day.jpg?s=612x612&w=0&k=20&c=kcGwHFa0o4nw7mqwCg4EP3JImM5dLmUIjblkcWoHmGI=",
  },
  {
    title: "Gala Night",
    description: "Enjoy the grand gala night with music, dance, and celebration of DTU spirit.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
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
