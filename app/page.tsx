import { PageLayout } from "@/components/layout";
import Link from "next/link";
export default function Home() {
  return (
    <PageLayout>
      <h1>bienvenue dans notre site sur les voitures</h1>
      <Link href="/formation" className="text-indigo-500 underline">
                Les voitures
            </Link>
    </PageLayout>
  );
}
