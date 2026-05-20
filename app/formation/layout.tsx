import Link from "next/link";
import { ReactNode } from "react";

interface FormationLayoutProps {
  children: ReactNode;
  params: Promise<{ moduleid?: string }>;
}

export default function FormationLayout({ children }: FormationLayoutProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="border-b border-gray-800 bg-black/40 backdrop-blur-md px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Link 
            href="/formation" 
            className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
          >
            Plan Automobile
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}