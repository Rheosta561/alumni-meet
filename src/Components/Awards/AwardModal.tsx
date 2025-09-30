import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

type Award = {
  image: string;
  title: string;
  description: string;
  tags: string[];
};

interface AwardModalProps {
  award: Award;
  onClose: () => void;
}

function AwardModal({ award, onClose }: AwardModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

        <img src={award.image} alt={award.title} className="rounded-lg mb-4" />

        <h3 className="text-xl font-semibold">{award.title}</h3>
        <p className="text-gray-600 mt-2">{award.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {award.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>


      </div>
    </div>
  );
}

export default AwardModal;
