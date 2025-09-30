import React from "react";
import { InfoIcon, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import type { Award } from "../../data";

type AwardCardProps = {
  award: Award;
  onInfo: () => void;
};

function AwardCard({ award, onInfo }: AwardCardProps) {
  const Icon = award.icon;

  return (
    <div className="border p-5 rounded-lg shadow hover:shadow-xl transition text-center flex flex-col items-center">
      <Icon className="w-12 h-12 text-yellow-500 mb-3" />
      <h3 className="text-lg font-semibold">{award.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{award.description}</p>

      <div className="flex gap-3 mt-4">
        <Button size="icon" onClick={onInfo}>
          <InfoIcon className="w-4 h-4" />
        </Button>
        <Button 
          className="flex items-center gap-1"
          onClick={() => window.open(award.applyLink, "_blank")}
        >
          Apply <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default AwardCard;
