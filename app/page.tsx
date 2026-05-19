import Link from "next/link";
import { PageLayout } from "@/components/layout";

export default function Home() {
  return (
    <PageLayout>
    
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/car-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Mon Garage Vitrine
          </h1>
          
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            explorez les plus grandes marques de l'automobile.
          </p>

          <div className="mt-8">
            <Link 
              href="/formation" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/40"
            >
              Explorer le catalogue
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}