"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/layout";

export default function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

   const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const star = parseInt(formData.get("star") as string, 10);
    const review = formData.get("review") as string;
    
    const id = crypto.randomUUID(); 
    const currentDate = new Date().toISOString();

    const maCleSupabaseComplete = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    try {
        const response = await fetch(
            "https://jbvwlhdowybjnothvdyb.supabase.co/rest/v1/Review",
            {
            method: "POST",
            headers: {
                "apikey": maCleSupabaseComplete,
                "Authorization": `Bearer ${maCleSupabaseComplete}`,
                "Content-Type": "application/json",
                "Prefer": "return=minimal"
            },
            body: JSON.stringify({ 
                id, 
                name, 
                star, 
                review,
                createdAt: currentDate,
                updatedAt: currentDate
            }), 
            }
        );

      if (response.ok) {
        router.push("/");
        router.refresh();
      } else {
        alert("Erreur lors de l'envoi de l'avis.");
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Erreur réseau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="max-w-lg mx-auto p-8 border border-gray-800 rounded-3xl bg-black/40 backdrop-blur-sm space-y-6 text-left shadow-xl">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-white font-mono uppercase tracking-tight">
              // Contact & Avis
            </h1>
            <p className="text-sm text-gray-400">
              Laissez votre avis pour qu'il s'affiche directement sur le Garage Vitrine.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Nom / Pseudo</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" 
                placeholder="Ex: Harris" 
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Note (sur 5)</label>
              <select 
                name="star" 
                required 
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="5">★★★★★ (5/5)</option>
                <option value="4">★★★★☆ (4/5)</option>
                <option value="3">★★★☆☆ (3/5)</option>
                <option value="2">★★☆☆☆ (2/5)</option>
                <option value="1">★☆☆☆☆ (1/5)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Votre commentaire</label>
              <textarea 
                name="review" 
                rows={4} 
                required 
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" 
                placeholder="Votre retour sur l'expérience vitrine..." 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white font-medium text-xs font-mono uppercase tracking-widest py-3 rounded-xl transition-all active:scale-98 shadow-lg shadow-indigo-500/20"
            >
              {loading ? "Envoi en cours..." : "Envoyer l'avis"}
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}