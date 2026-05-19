import { LESSONS } from "../data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    moduleid: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { moduleid } = await params;
  const lesson = LESSONS.find((l) => l.slug === moduleid);

  if (!lesson) {
    return (
      <div className="pt-0 px-4 pb-4 max-w-md mr-auto">
        <Card>
          <CardHeader>
            <CardTitle>Module introuvable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Ce module n'existe pas.</p>
            <Link href="/formation" className="text-indigo-500 underline">
              Retour au plan de formation
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-0 px-4 pb-4 max-w-md mr-auto min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>{lesson.title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            {lesson.lessonsList.map((subLesson, index) => (
              <li key={index}>{subLesson}</li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button asChild variant="outline" className="w-full mt-2">
            <Link href="/formation">Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}