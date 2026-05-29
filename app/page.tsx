import Link from "next/link";
import { PageLayout } from "@/components/layout";

interface Review {
  id: string;
  name: string;
  star: number;
  review: string;
}

export default async function Home() {
  let reviews: Review[] = [];
  const maCleSupabaseComplete = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpidndsaGRvd3liam5vdGh2ZHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNjA4MTMsImV4cCI6MjA5NDkzNjgxM30.tPgL6fLI9NbWfVXMQw-0Q1saI7Z1bLX82UAmpi2ytjw"; // Laisse ta clé eyJ...

  try {
    const response = await fetch(
      "https://jbvwlhdowybjnothvdyb.supabase.co/rest/v1/Review?select=id,name,star,review",
      {
        method: "GET",
        headers: {
          "apikey": maCleSupabaseComplete,
          "Authorization": `Bearer ${maCleSupabaseComplete}`,
        },
        cache: "no-store", 
      }
    );

    if (response.ok) {
      reviews = await response.json();
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <PageLayout>
      
      {/* SECTION VITRINE VIDEO */}
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
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
          <div className="mt-8 space-x-4">
            <Link href="/formation" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/40">
              Explorer le catalogue
            </Link>
            {/* BOUTON MODIFIÉ POUR ALLER SUR LA PAGE CONTACT */}
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-full text-gray-300 bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all transform hover:scale-105">
              Laisser un avis / Contact
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION DES REVIEWS CONTÔLÉE */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <hr className="border-t border-gray-800 my-8" />
        
        <h2 className="text-3xl font-bold text-center text-white">
          Avis de nos passionnés
        </h2>

        {reviews.length === 0 && (
          <p className="text-center text-gray-400 italic">
            Aucun avis pour le moment.
          </p>
        )}

        {reviews.length > 0 && (
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {reviews.map((item: Review) => (
              <li key={item.id} className="p-5 border border-gray-800 rounded-2xl bg-black/40 backdrop-blur-sm space-y-2 flex flex-col justify-between">
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-200">{item.name}</span>
                    <span className="text-yellow-500 font-mono tracking-wider">
                      {"★".repeat(item.star)}{"☆".repeat(Math.max(0, 5 - item.star))}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {item.review}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </PageLayout>
  );
}