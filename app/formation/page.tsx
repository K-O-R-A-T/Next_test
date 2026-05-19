import { PageLayout } from "@/components/layout";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { LESSONS } from "./data";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col p-4 gap-4 max-w-md mr-auto min-h-full border-x">
      <Card>
        <CardHeader>
          <CardTitle>Plan Automobile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {LESSONS.map((carBrand) => (
            <Link 
              key={carBrand.id} 
              href={`/formation/${carBrand.slug}`} 
              className="text-indigo-500 underline text-sm hover:text-indigo-600 transition-colors"
            >
              {carBrand.title}
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}