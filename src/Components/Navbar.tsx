import  { useState } from "react";
import { Menu, UserPlus, X } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "../assets/DTU LOGO.jpeg";

interface NavbarProps {
  onLinkClick?: (sectionId: string) => void;
}

function Navbar({ onLinkClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Contact"];

  const handleClick = (link: string) => {
    setActive(link);
    if (onLinkClick) onLinkClick(link.toLowerCase());
    setMobileOpen(false);
  };

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="h-12 object-contain" />
          <div>
            <p className="font-semibold">Delhi Technological University</p>
            <p className="text-xs">Alumni Meet 2025</p>
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-6 text-sm mx-auto">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => handleClick(link)}
              className={`transition ${
                active === link ? "text-blue-600 font-medium" : "hover:text-blue-600"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Section - Register / Mobile */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <Button className="flex items-center gap-2 border">
              <UserPlus className="w-4 h-4" /> Register
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col bg-white border-t shadow-sm px-4 py-3 space-y-3">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => handleClick(link)}
              className={`transition ${
                active === link ? "text-blue-600 font-medium" : "hover:text-blue-600"
              }`}
            >
              {link}
            </a>
          ))}

          <Button className="flex items-center gap-2 w-full justify-center">
            <UserPlus className="w-4 h-4" /> Register
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
