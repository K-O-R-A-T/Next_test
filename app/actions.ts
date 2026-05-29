"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addReview(formData: FormData) {
  const name = formData.get("name") as string;
  const star = parseInt(formData.get("star") as string, 10);
  const review = formData.get("review") as string;

  if (!name || !star || !review) return { error: "Tous les champs sont requis." };

  const maCleSupabaseComplete = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; 
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/Review`,
      {
        method: "POST",
        headers: {
          "apikey": maCleSupabaseComplete,
          "Authorization": `Bearer ${maCleSupabaseComplete}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({ 
          id: crypto.randomUUID(), 
          name, 
          star, 
          review,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }),
      }
    );

    if (!response.ok) return { error: "Erreur" };
  } catch (err) {
    return { error: "Erreur" };
  }

  revalidatePath("/");
  redirect("/");
}