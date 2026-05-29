"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function addReview(formData: FormData) {
  const name = formData.get("name") as string;
  const star = parseInt(formData.get("star") as string, 10);
  const review = formData.get("review") as string;

  if (!name || !star || !review) return { error: "Tous les champs sont requis." };

  const maCleSupabaseComplete = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpidndsaGRvd3liam5vdGh2ZHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNjA4MTMsImV4cCI6MjA5NDkzNjgxM30.tPgL6fLI9NbWfVXMQw-0Q1saI7Z1bLX82UAmpi2ytjw";

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
        body: JSON.stringify({ name, star, review }),
      }
    );

    if (!response.ok) {
      console.error("Erreur insertion Supabase");
      return { error: "Erreur" };
    }

  } catch (err) {
    console.error(err);
    return { error: "Erreur" };
  }

  revalidatePath("/"); 
  redirect("/"); 
}