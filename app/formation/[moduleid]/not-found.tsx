import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="text-center py-16 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="relative w-64 h-40 mb-6 animate-bounce flex items-center justify-center">
        <Image
          src="/miata-icon.png"
          alt="Miata 404"
          width={256}
          height={160}
          className="object-contain"
          unoptimized
        />
      </div>
      
      <h2 className="text-3xl font-extrabold text-red-500 tracking-tight">
        Marque Introuvable
      </h2>
      
      <p className="text-gray-400 mt-3 text-sm max-w-sm mx-auto leading-relaxed">
        Désolé, ce constructeur automobile ne fait pas encore partie de ton plan de formation ou l'adresse est incorrecte.
      </p>

      <Link 
        href="/formation" 
        className="mt-8 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
      >
        ← Retour au Plan Automobile
      </Link>
    </div>
  );
}