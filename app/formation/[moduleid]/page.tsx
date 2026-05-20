"use client"; // 💡 Obligatoire pour pouvoir utiliser le clic (useState)

import { LESSONS } from "../data";
import { notFound } from "next/navigation";
import { use, useState } from "react";

interface PageProps {
  params: Promise<{ moduleid: string }>;
}

export default function LessonsPage({ params }: PageProps) {
  const resolvedParams = use(params);

  const [openModelIndex, setOpenModelIndex] = useState<number | null>(null);

  const carBrand = LESSONS.find((brand) => brand.slug === resolvedParams.moduleid);

  if (!carBrand) {
    notFound();
  }

  const toggleModel = (index: number) => {
    if (openModelIndex === index) {
      setOpenModelIndex(null); 
    } else {
      setOpenModelIndex(index); 
    }
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto px-4 py-6">
      {/* En-tête de la marque */}
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-black text-white tracking-tight">
          {carBrand.title}
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Clique sur une fiche pour révéler la photo et les détails exclusifs.
        </p>
      </div>

      <div className="space-y-4">
        {carBrand.lessonsList.map((model, index) => {
          const isOpen = openModelIndex === index;

          return (
            <div 
              key={index} 
              onClick={() => toggleModel(index)}
              className={`p-5 rounded-2xl border text-gray-200 shadow-xl relative overflow-hidden group transition-all duration-500 cursor-pointer select-none ${
                isOpen 
                  ? "border-indigo-500 bg-gray-900" 
                  : "border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/30 hover:border-gray-700"
              }`}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? "text-indigo-400" : "text-white group-hover:text-indigo-400"}`}>
                    {model.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs px-2.5 py-0.5 bg-gray-800 rounded-md text-gray-400 font-mono">
                    {model.engine}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-xl border border-indigo-500/20 shadow-sm">
                    {model.power}
                  </span>
                  <span className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-400" : ""}`}>
                    ▼
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-4 leading-relaxed font-normal">
                {model.desc}
              </p>

              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-gray-800 pt-4 flex justify-center bg-black/40 rounded-xl p-4">
                  <img 
                    src={`/${model.name.toLowerCase().replace(/\s+/g, "-")}.webp`} 
                    alt={model.name}
                    className="max-h-60 object-contain rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/miata-icon.png";
                    }}
                  />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}