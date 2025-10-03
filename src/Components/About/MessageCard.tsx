
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface MessageCardProps {
  title: string;
  message: string;
  image?: string;
  reverse?: boolean; // if true → image on right
}

export default function MessageCard({
  title,
  message,
  image,
  reverse = false,
}: MessageCardProps) {
  return (
    <motion.div
      className={`flex flex-col  items-center gap-6 border rounded-lg p-4 bg-white shadow-sm ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image Section */}
      <div className="w-full  h-64 bg-gray-200 rounded-lg overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-500 flex items-center justify-center h-full">
            Image Placeholder
          </span>
        )}
      </div>

      {/* Message Section */}
      <div className="w-full ">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Quote className="w-4 h-4 text-gray-500 mt-2" />
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
}
