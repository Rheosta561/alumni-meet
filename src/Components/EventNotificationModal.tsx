
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface EventNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  buttonText: string;
  buttonRoute: string;
}

export default function EventNotificationModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  tags,
  buttonText,
  buttonRoute,
}: EventNotificationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        {image ? (
          <img
            src={image}
            alt={title || "Event Image"}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        ) : (
          <div className="space-y-4 text-center">
            {title && <h2 className="text-xl font-semibold">{title}</h2>}
            {description && <p className="text-gray-600 text-sm">{description}</p>}

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-6 flex justify-center">
          <a href={buttonRoute}>
            <Button className="px-6">{buttonText}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
