"use client";

import { api } from "@/app/api";
import type { AnimalSchema } from "@/shared/animal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type z from "zod/v4";

export default function AdminAnimalsPage() {
  const {
    data: animals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["animals"],
    queryFn: async () => {
      const { data, error } = await api.animals.get();

      if (error) {
        throw new Error(error.value as string);
      }

      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-400">{error.message}</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {animals?.map((animal) => (
          <p key={animal.id}>{animal.name}</p>
        ))}
      </div>
    </div>
  );
}

// type Animal = z.infer<typeof AnimalSchema> & {
//   id: string;
//   createdAt: Date;
// };

// Базовый вариант, но с use query
// export default function AdminAnimalsPage() {
//   const {
//     data: animals,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["animals"],
//     queryFn: async () => {
//       const response = await fetch("/api/animals");
//       if (!response.ok) {
//         throw new Error(await response.text());
//       }
//
//       return (await response.json()) as Animal[];
//     },
//   });
//
//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//
//   if (error) {
//     return <p className="text-red-400">{error.message}</p>;
//   }
//
//   return (
//     <div className="flex flex-col gap-6">
//       <div className="flex flex-col gap-2">
//         {animals?.map((animal) => (
//           <p key={animal.id}>{animal.name}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// Самый базовый вариант
// export default function AdminAnimalsPage() {
//   const [animals, setAnimals] = useState<Animal[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//
//   async function getAnimals() {
//     try {
//       const response = await fetch("/api/animals");
//       if (!response.ok) {
//         throw new Error(await response.text());
//       }
//
//       const data = await response.json();
//       setAnimals(data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//       setError(error.message);
//       setIsLoading(false);
//     }
//   }
//
//   useEffect(() => {
//     getAnimals();
//   }, []);
//
//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//
//   if (error) {
//     return <p className="text-red-400">{error}</p>;
//   }
//
//   return (
//     <div className="flex flex-col gap-6">
//       <div className="flex flex-col gap-2">
//         {animals.map((animal) => (
//           <p key={animal.id}>{animal.name}</p>
//         ))}
//       </div>
//     </div>
//   );
// }
