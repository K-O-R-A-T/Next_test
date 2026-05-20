import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const fakeRows = [1, 2, 3];

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="border-b border-gray-800 pb-4">
        <Skeleton className="h-10 w-48 mb-3 bg-gray-800" />
        <Skeleton className="h-4 w-72 bg-gray-800/60" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {fakeRows.map((row) => (
          <div 
            key={row} 
            className="p-4 rounded-xl border border-gray-800 bg-gray-900/20 flex justify-between items-center h-16"
          >
            <Skeleton className="h-5 w-32 bg-gray-800" />
            
            <Skeleton className="h-4 w-16 bg-gray-800/40" />
          </div>
        ))}
      </div>
    </div>
  );
}