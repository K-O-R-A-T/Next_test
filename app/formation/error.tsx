"use client"

import { useEffect } from "react"
import { TriangleAlert } from "lucide-react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Une erreur est survenue :", error)
  }, [error])

  return (
    <div className="p-4 max-w-md mx-auto mt-4">
      <div className="relative w-full rounded-lg border border-red-500 shadow-md p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-background text-foreground">

        <TriangleAlert className="h-4 w-4 text-red-500" />

        <h5 className="mb-1 font-medium leading-none tracking-tight">
          Oups, quelque chose a planté !
        </h5>

        <button 
          onClick={() => reset()} 
          className="mt-3 text-xs text-indigo-500 underline hover:text-indigo-600 block"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}