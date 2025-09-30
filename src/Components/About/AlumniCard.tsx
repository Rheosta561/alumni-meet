

interface AlumniCardProps {
  name: string;
  role: string;
  image?: string;
}

export default function AlumniCard({ name, role, image }: AlumniCardProps) {
  return (
    <div className="border rounded-lg p-4 min-w-64 text-center bg-white shadow-sm">
      <div className="h-56 bg-gray-200 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-500">Image Placeholder</span>
        )}
      </div>
      <h3 className="font-medium text-sm">{name}</h3>
      <p className="text-xs text-gray-600">{role}</p>
    </div>
  );
}
