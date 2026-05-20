import { LESSONS } from "../formation/data";

export default function RoulettePage() {
  const doubleLessons = [...LESSONS, ...LESSONS, ...LESSONS];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite; /* 20 secondes pour que ce soit fluide avec la grande taille */
        }
      `}} />

      <div className="text-center mb-20"> 
        <h1 className="text-5xl font-black tracking-wider uppercase text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Les Marques de Confiance
        </h1>
      </div>

      <div className="relative w-full max-w-[95%] border-y border-gray-800 bg-gray-900/10 py-16 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-black after:to-transparent">
        <div className="flex w-max gap-16 animate-marquee whitespace-nowrap py-4">
          {doubleLessons.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-gray-950 border border-gray-800 p-8 rounded-3xl min-w-[350px] h-[200px] shadow-2xl hover:border-indigo-500 hover:scale-105 transition-all duration-300 select-none"
            >
              <div className="w-32 h-32 flex items-center justify-center bg-black/50 rounded-2xl p-4 border border-gray-900 shrink-0">
                <img
                  src={brand.logo}
                  alt={brand.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-black tracking-wide text-4xl">
                {brand.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}