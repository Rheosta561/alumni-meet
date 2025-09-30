import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* University Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Delhi Technological University</h3>
          <p className="text-sm text-gray-600">
            Founded in 1941, formerly Delhi College of Engineering. Urban main campus: 68 hectares, East Delhi campus: 0.83 hectares.
          </p>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-zinc-950" />
            <span>P4X9+X2J, Bawana Rd, Shahbad Daulatpur Village, Rohini, New Delhi, Delhi, 110042</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-5 h-5 text-zinc-950" />
            <span>011 2787 1018</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-5 h-5 text-zinc-950" />
            <span>contact@dtu.ac.in</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Vice-Chancellor: Prateek Sharma
          </p>
        </div>

        {/* Coordinator Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Alumni Meet Coordinator</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-zinc-950" />
            <span>DTU Campus, Alumni Meet Office</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-5 h-5 text-zinc-950" />
            <span>+91-XXXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-5 h-5 text-zinc-950" />
            <span>alumni@dtu.ac.in</span>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Quick Info</h3>
          <p className="text-sm text-gray-600">
            Total Enrollment: 12,850 (2025) <br />
            Colors: White, Brown <br />
            Language: Hindi; English <br />
            Motto: Vijñānavān prajñānavān bhavatu
          </p>
          <p className="text-sm text-gray-600">
            Campus Hours: Opens 8 am
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Delhi Technological University. All rights reserved.
      </div>
    </footer>
  );
}
