import { useState, useEffect, useRef } from "react";
import SliderBox from "../Components/SliderBox";
import Navbar from "../Components/Navbar";
import Awards from "../Components/Awards/Awards";
import AboutSection from "@/Components/About/AboutSection";
import Footer from "../Components/Footer";
import EventNotificationModal from "../Components/EventNotificationModal";
import { Calendar } from "lucide-react";
import { eventInfo, highlights, eventNotification } from "../data";

function Home() {
  const [showEventModal, setShowEventModal] = useState(false);

  // Refs for sections
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Always show modal on each session
  useEffect(() => {
    setShowEventModal(true); // Show modal every page load
  }, []);

  const handleCloseModal = () => {
    setShowEventModal(false); // Close modal without saving to localStorage
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    switch (sectionId) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onLinkClick={scrollToSection} />

      {/* Home Section */}
      <div ref={homeRef}>
        <SliderBox />

        {/* Event Notification Modal */}
        <EventNotificationModal
          isOpen={showEventModal}
          onClose={handleCloseModal}
          image="https://alumniaffairs.dtu.ac.in/pages/public/img/alumni%20c1.jpeg"
          {...eventNotification}
        />

        {/* Main Intro Section */}
        <div className="mx-auto w-screen px-4 flex flex-col items-center">
          <div className="flex items-center gap-3 pt-4">
            <Calendar className="w-8 h-8 text-blue-800" />
            <h1 className="font-semibold text-3xl">Alumni Meet 2025</h1>
          </div>

          <p className="mt-3 text-gray-700 max-w-3xl text-sm text-center">
            Join us as we celebrate the legacy of Delhi Technological University with our
            grand <span className="font-medium">Alumni Meet 2025</span>. Reconnect with
            old friends, interact with distinguished alumni, and engage in inspiring
            sessions that bridge the past with the future. A day filled with nostalgia,
            networking, and unforgettable experiences awaits you!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-4 text-gray-600">
            {eventInfo.map(({ icon: Icon, text, color }, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon className={`w-5 h-5 ${color}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="mx-4 mt-10" />
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(
              ({ title, description, image, icon: Icon, iconColor }, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-cover bg-center relative h-56"
                  style={{ backgroundImage: `url('${image}')` }}
                >
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-center text-white p-4">
                    <Icon className={`w-8 h-8 mb-2 ${iconColor}`} />
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-xs">{description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <Awards />
        <AboutSection />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
