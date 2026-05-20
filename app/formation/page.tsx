import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/layout";
import { LESSONS } from "./data";

export default function Formation() {
  const logos: { [key: string]: string } = {
    "1": "/porsche-logo.png",
    "2": "/ferrari-logo.png",
    "3": "/alfa-logo.png",
    "4": "/LandRover-logo.png",
    "5": "/Koenigsegg-logo.png"
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-white mb-8 text-center sm:text-left">
        Plan Automobile
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {LESSONS.map((carBrand) => (
          <Link
            key={carBrand.id}
            href={`/formation/${carBrand.slug}`}
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800/80 hover:border-indigo-500/50 transition-all group"
          >
          <div className="w-12 h-12 relative flex items-center justify-center bg-black rounded-xl p-2 border border-gray-800 shrink-0">
            <img 
               src={carBrand.logo} 
               alt={`Logo ${carBrand.title}`}
              className="object-contain w-full h-full" 
            />
          </div>

            <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
              {carBrand.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}