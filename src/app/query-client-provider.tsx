"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query";

export default function QueryClientProviderContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
