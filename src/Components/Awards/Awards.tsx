import React, { useState } from "react";
import AwardCard from "./AwardCard";
import AwardModal from "./AwardModal";
import { awards } from "../../data";

function Awards() {
  const [selectedAward, setSelectedAward] = useState<typeof awards[0] | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-3">Awards</h2>
      <p className="text-sm text-center max-w-2xl mx-auto mb-6">
        The Alumni Awards recognize individuals who have brought pride to DTU through their exceptional achievements, innovation, and service to society.  
        These honours celebrate not just success, but the spirit of leadership, perseverance, and impact that defines our community.  
        Step forward and be acknowledged — your journey deserves to be celebrated.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} onInfo={() => setSelectedAward(award)} />
        ))}
      </div>

      {selectedAward && (
        <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />
      )}
    </div>
  );
}

export default Awards;
